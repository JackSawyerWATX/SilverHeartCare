/**
 * Gallery Component with Embla Carousel and Parallax Effect
 *
 * SOLID Principles Implementation:
 * - SRP: Each hook/component has single responsibility
 * - OCP: Easily extensible through composition and hooks
 * - LSP: Type-safe interfaces for carousel operations
 * - ISP: Segregated interfaces for buttons, dots, and parallax
 * - DIP: Depends on abstraction (EmblaCarouselType) not concrete implementations
 *
 * Dependencies:
 *   npm install embla-carousel embla-carousel-react
 *
 * Usage:
 *   import { Gallery } from './Gallery'
 *   <Gallery slides={[1,2,3,4,5]} options={{ loop: true }} />
 *
 * Styles: Imported from src/styles/gallery.css
 */

import {
  ComponentPropsWithRef,
  useCallback,
  useEffect,
  useRef,
  useState
} from 'react'
import {
  EmblaCarouselType,
  EmblaEventType,
  EmblaOptionsType
} from 'embla-carousel'
import useEmblaCarousel from 'embla-carousel-react'
import '../../styles/gallery.css'

// Constants

const CAROUSEL_PARALLAX_TWEEN_FACTOR_BASE = 0.2
const CAROUSEL_EVENTS = {
  RE_INIT: 'reInit',
  SELECT: 'select',
  SCROLL: 'scroll'
} as const

// Type Definitions (Interface Segregation) 

type CarouselNavigation = {
  prevBtnDisabled: boolean
  nextBtnDisabled: boolean
  onPrevButtonClick: () => void
  onNextButtonClick: () => void
}

type DotNavigation = {
  selectedIndex: number
  scrollSnaps: number[]
  onDotButtonClick: (index: number) => void
}

type CarouselEventListener = (api: EmblaCarouselType, event?: EmblaEventType) => void

type GalleryProps = {
  slides: number[]
  options?: EmblaOptionsType
  /** Override image src per slide. Defaults to picsum placeholder. */
  getImageSrc?: (index: number) => string
}

// Navigation Hooks (Single Responsibility) 

/**
 * Hook for managing carousel navigation button state
 * Responsibility: Track button enabled/disabled state based on scroll position
 */
function useCarouselNavigation(
  emblaApi: EmblaCarouselType | undefined
): CarouselNavigation {
  const [prevBtnDisabled, setPrevBtnDisabled] = useState(true)
  const [nextBtnDisabled, setNextBtnDisabled] = useState(true)

  const onPrevButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollPrev()
  }, [emblaApi])

  const onNextButtonClick = useCallback(() => {
    if (!emblaApi) return
    emblaApi.scrollNext()
  }, [emblaApi])

  const updateButtonState = useCallback((api: EmblaCarouselType) => {
    if (!api.canScrollPrev || !api.canScrollNext) return
    setPrevBtnDisabled(!api.canScrollPrev())
    setNextBtnDisabled(!api.canScrollNext())
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    
    updateButtonState(emblaApi)
    emblaApi
      .on(CAROUSEL_EVENTS.RE_INIT, updateButtonState)
      .on(CAROUSEL_EVENTS.SELECT, updateButtonState)
  }, [emblaApi, updateButtonState])

  return { prevBtnDisabled, nextBtnDisabled, onPrevButtonClick, onNextButtonClick }
}

// Dot Navigation Hook (Single Responsibility) 

/**
 * Hook for managing carousel dot/indicator state
 * Responsibility: Track selected index and handle dot click events
 */
function useDotNavigation(emblaApi: EmblaCarouselType | undefined): DotNavigation {
  const [selectedIndex, setSelectedIndex] = useState(0)
  const [scrollSnaps, setScrollSnaps] = useState<number[]>([])

  const onDotButtonClick = useCallback(
    (index: number) => {
      if (!emblaApi) return
      emblaApi.scrollTo(index)
    },
    [emblaApi]
  )

  const initializeSnaps = useCallback((api: EmblaCarouselType) => {
    if (!api.scrollSnapList) return
    setScrollSnaps(api.scrollSnapList())
  }, [])

  const updateSelectedIndex = useCallback((api: EmblaCarouselType) => {
    if (!api.scrollProgress || !api.scrollSnapList) return
    const scrollProgress = api.scrollProgress()
    const snaps = api.scrollSnapList()
    let selectedIndex = 0
    
    for (let i = 0; i < snaps.length; i++) {
      if (scrollProgress < snaps[i]) break
      selectedIndex = i
    }
    
    setSelectedIndex(selectedIndex)
  }, [])

  useEffect(() => {
    if (!emblaApi) return
    
    initializeSnaps(emblaApi)
    updateSelectedIndex(emblaApi)
    emblaApi
      .on(CAROUSEL_EVENTS.RE_INIT, initializeSnaps)
      .on(CAROUSEL_EVENTS.RE_INIT, updateSelectedIndex)
      .on(CAROUSEL_EVENTS.SELECT, updateSelectedIndex)
  }, [emblaApi, initializeSnaps, updateSelectedIndex])

  return { selectedIndex, scrollSnaps, onDotButtonClick }
}

// Parallax Hook (Single Responsibility) 

/**
 * Pure function for calculating parallax translation
 * Responsibility: Encapsulate parallax calculation logic
 */
function calculateParallaxTranslate(
  api: EmblaCarouselType,
  engine: ReturnType<EmblaCarouselType['internalEngine']>,
  scrollProgress: number,
  slideIndex: number,
  tweenFactor: number
): number {
  if (!api.scrollSnapList) return 0
  const snaps = api.scrollSnapList()
  const snap = snaps[slideIndex]
  let diffToTarget = scrollProgress

  if (snap !== undefined) {
    diffToTarget = snap - scrollProgress
  }

  if (engine.options.loop) {
    engine.slideLooper.loopPoints.forEach((loopItem) => {
      const target = loopItem.target()
      if (slideIndex === loopItem.index && target !== 0) {
        const sign = Math.sign(target)
        if (sign === -1) diffToTarget = (snap || 0) - (1 + scrollProgress)
        if (sign === 1) diffToTarget = (snap || 0) + (1 - scrollProgress)
      }
    })
  }

  return diffToTarget * (-1 * tweenFactor) * 100
}

/**
 * Hook for managing parallax effect
 * Responsibility: Calculate and apply parallax transforms to carousel elements
 */
function useParallaxEffect(emblaApi: EmblaCarouselType | undefined): CarouselEventListener {
  const tweenFactor = useRef(0)
  const tweenNodes = useRef<HTMLElement[]>([])

  const initializeTweenNodes = useCallback((api: EmblaCarouselType) => {
    if (!api.slideNodes) return
    tweenNodes.current = api.slideNodes().map(
      (node) => node.querySelector('.embla__parallax__layer') as HTMLElement
    )
  }, [])

  const calculateTweenFactor = useCallback((api: EmblaCarouselType) => {
    if (!api.scrollSnapList) return
    tweenFactor.current = CAROUSEL_PARALLAX_TWEEN_FACTOR_BASE * api.scrollSnapList().length
  }, [])

  const applyParallaxTransform: CarouselEventListener = useCallback(
    (api: EmblaCarouselType, event?: EmblaEventType) => {
      if (!api.internalEngine || !api.scrollProgress || !api.slidesInView) return
      const engine = api.internalEngine()
      const scrollProgress = api.scrollProgress()
      const slidesInView = api.slidesInView()
      const isScrollEvent = event === CAROUSEL_EVENTS.SCROLL

      tweenNodes.current.forEach((tweenNode, slideIndex) => {
        if (!tweenNode) return
        if (isScrollEvent && !slidesInView.includes(slideIndex)) return

        const translate = calculateParallaxTranslate(
          api,
          engine,
          scrollProgress,
          slideIndex,
          tweenFactor.current
        )
        
        tweenNode.style.transform = `translateX(${translate}%)`
      })
    },
    []
  )

  useEffect(() => {
    if (!emblaApi) return
    
    initializeTweenNodes(emblaApi)
    calculateTweenFactor(emblaApi)
    applyParallaxTransform(emblaApi)
    
    emblaApi
      .on(CAROUSEL_EVENTS.RE_INIT, initializeTweenNodes)
      .on(CAROUSEL_EVENTS.RE_INIT, calculateTweenFactor)
      .on(CAROUSEL_EVENTS.RE_INIT, applyParallaxTransform)
      .on(CAROUSEL_EVENTS.SCROLL, applyParallaxTransform)
  }, [emblaApi, initializeTweenNodes, calculateTweenFactor, applyParallaxTransform])

  return applyParallaxTransform
}

// Button Components (Single Responsibility) 

type ButtonProps = ComponentPropsWithRef<'button'>

/**
 * Previous button component
 * Responsibility: Render previous navigation button
 */
const PrevButton = ({ children, ...props }: ButtonProps) => (
  <button className="embla__button embla__button--prev" type="button" {...props}>
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path fill="currentColor" d="M355.66 11.354c13.793-13.805 36.208-13.805 50.001 0 13.785 13.804 13.785 36.238 0 50.034L201.22 266l204.442 204.61c13.785 13.805 13.785 36.239 0 50.044-13.793 13.796-36.208 13.796-50.002 0a5994246.277 5994246.277 0 0 0-229.332-229.454 35.065 35.065 0 0 1-10.326-25.126c0-9.2 3.393-18.26 10.326-25.2C172.192 194.973 332.731 34.31 355.66 11.354Z" />
    </svg>
    {children}
  </button>
)

/**
 * Next button component
 * Responsibility: Render next navigation button
 */
const NextButton = ({ children, ...props }: ButtonProps) => (
  <button className="embla__button embla__button--next" type="button" {...props}>
    <svg className="embla__button__svg" viewBox="0 0 532 532">
      <path fill="currentColor" d="M176.34 520.646c-13.793 13.805-36.208 13.805-50.001 0-13.785-13.804-13.785-36.238 0-50.034L330.78 266 126.34 61.391c-13.785-13.805-13.785-36.239 0-50.044 13.793-13.796 36.208-13.796 50.002 0 22.928 22.947 206.395 206.507 229.332 229.454a35.065 35.065 0 0 1 10.326 25.126c0 9.2-3.393 18.26-10.326 25.2-45.865 45.901-206.404 206.564-229.332 229.52Z" />
    </svg>
    {children}
  </button>
)

/**
 * Dot indicator button component
 * Responsibility: Render dot navigation indicator
 */
const DotButton = (props: ButtonProps) => {
  const { children, ...restProps } = props
  return (
    <button type="button" {...restProps}>
      {children}
    </button>
  )
}

// Main Gallery Component (Composition & Orchestration) 

/**
 * Gallery Component
 * Responsibility: Orchestrate carousel composition using specialized hooks
 * Does NOT handle individual concerns - delegates to focused hooks
 */
const Gallery = ({
  slides,
  options,
  getImageSrc
}: GalleryProps) => {
  // Use embla carousel hook for core carousel functionality
  const [emblaRef, emblaApi] = useEmblaCarousel(options)
  
  // Delegate specific concerns to focused hooks
  const carouselNav = useCarouselNavigation(emblaApi)
  const dotNav = useDotNavigation(emblaApi)
  useParallaxEffect(emblaApi)

  const imageSrc = (index: number) =>
    getImageSrc ? getImageSrc(index) : `https://picsum.photos/600/350?v=${index}`

  return (
    <div className="embla">
      <div className="embla__viewport" ref={emblaRef}>
        <div className="embla__container">
          {slides.map((index) => (
            <div className="embla__slide" key={index}>
              <div className="embla__parallax">
                <div className="embla__parallax__layer">
                  <img
                    className="embla__slide__img embla__parallax__img"
                    src={imageSrc(index)}
                    alt={`Slide ${index + 1}`}
                    loading="lazy"
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <div className="embla__controls">
        <div className="embla__buttons">
          <PrevButton 
            onClick={carouselNav.onPrevButtonClick} 
            disabled={carouselNav.prevBtnDisabled} 
          />
          <NextButton 
            onClick={carouselNav.onNextButtonClick} 
            disabled={carouselNav.nextBtnDisabled} 
          />
        </div>

        <div className="embla__dots">
          {dotNav.scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              onClick={() => dotNav.onDotButtonClick(index)}
              className={`embla__dot${index === dotNav.selectedIndex ? ' embla__dot--selected' : ''}`}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export { Gallery }
