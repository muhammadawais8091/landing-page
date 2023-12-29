import { PRICE_PLANS } from '@/constants'
import Slider from "react-slick";
import { Heading5 } from '../common/Typography/Heading5';
import { Paragraph } from '../common/Typography/Paragraph';
import { Heading2 } from '../common/Typography/Heading2';
import { Heading3 } from '../common/Typography/Heading3';

const settings = {
  infinite: false,
  speed: 500,
  slidesToShow: 3,
  slidesToScroll: 3,
  centerMode: false,
  slideWidth: 300,

  responsive: [
    {
      breakpoint: 640,
      settings: {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "70px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
      }
    },

    {
      breakpoint: 450,
      settings: {
        className: "center",
        centerMode: true,
        infinite: true,
        centerPadding: "40px",
        slidesToShow: 1,
        slidesToScroll: 1,
        speed: 500,
      }
    }
  ]
};

export const PricePlan = () => (
  <section>
    <div className='md:py-[80px] bg-[#DDE0E2] py-[50px] md:mt-[60px] mt-[55px]'>
      <div className='xs:px-[0] px-[20px]'>
        <Heading2 text='Pricing Plans.' />

        <Paragraph className='mt-[20px] text-center'
          text='We’ve got a plan for you. Change or cancel your plan at any time.'
        />
      </div>

      <div className='fixed-container'>
        <div className='mt-[30px] price-plan-wrap'>
          <Slider {...settings}>
            {PRICE_PLANS.map((pricePlan) => {
              const { planId, planTitle, planPrice, planService } = pricePlan

              return (
                <div key={planId} className='px-[5px] sm:px-[10px] md:px-[20px]'>
                  <div className='bg-white py-[25px] xs:py-[43px] rounded-[35px]'>
                    <Heading3 className='text-center' text={planTitle} />

                    <div className='mt-[10px] xs:mt-[20px] md:mt-[50px]'>
                      <Heading5 text={planPrice} />

                      <Paragraph className='mt-[10px] text-center leading-[23.23px]' text={planService} />
                    </div>
                  </div>
                </div>
              )
            })}
          </Slider>
        </div>

        <div id='letsTalk' />
      </div>
    </div>
  </section>
)
