import { useEffect } from 'react';
import 'https://cdn.jsdelivr.net/npm/keen-slider@6.8.6/keen-slider.min.css';
import KeenSlider from 'keen-slider/react';

const TestimonialSlider = () => {
  useEffect(() => {
    const slider = new KeenSlider('.keen-slider', {
      loop: true,
      slidesPerView: 1.25,
      spacing: 16,
      breakpoints: {
        '(min-width: 1024px)': {
          slidesPerView: 1.5,
          spacing: 32,
        },
      },
    });

    return () => {
      slider.destroy();
    };
  }, []);

  return (
    <section className="bg-gray-50">
      <div className="mx-auto max-w-[1340px] px-4 py-12 sm:px-6 lg:me-0 lg:py-16 lg:pe-0 lg:ps-8 xl:py-24">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center lg:gap-16">
          <div className="max-w-xl text-center sm:text-left">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              Don't just take our word for it...
            </h2>

            <p className="mt-4 text-gray-700">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Voluptas veritatis illo
              placeat harum porro optio fugit a culpa sunt id!
            </p>
          </div>

          <div className="-mx-6 lg:col-span-2 lg:mx-0">
            <KeenSlider className="keen-slider">
              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  {/* Testimonial content */}
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  {/* Testimonial content */}
                </blockquote>
              </div>

              <div className="keen-slider__slide">
                <blockquote className="flex h-full flex-col justify-between bg-white p-6 shadow-sm sm:p-8 lg:p-12">
                  {/* Testimonial content */}
                </blockquote>
              </div>
            </KeenSlider>
          </div>
        </div>

        <div className="mt-8 flex justify-center gap-4 lg:hidden">
          <button
            aria-label="Previous slide"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            {/* Previous slide icon */}
          </button>

          <button
            aria-label="Next slide"
            className="rounded-full border border-rose-600 p-4 text-rose-600 transition hover:bg-rose-600 hover:text-white"
          >
            {/* Next slide icon */}
          </button>
        </div>
      </div>
    </section>
  );
};

export default TestimonialSlider;
