import Slider from 'react-slick'
import 'slick-carousel/slick/slick.css'
import 'slick-carousel/slick/slick-theme.css'
import { ProjectCardVersion2 } from '@elements'
import { FUN_PROJECTS } from '../constant'

export const FunProjects: React.FC = () => {
  const settings = {
    dots: true,
    infinite: false,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
          slidesToScroll: 3,
          dots: true,
        },
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 2,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 640,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  }

  return (
    <div className="flex flex-col gap-x-8 gap-y-8 relative" id="project">
      <h1 className="text-white text-4xl font-bold"> Projects </h1>
      <Slider {...settings} className="grid grid-flow-row gap-4">
        {FUN_PROJECTS.map((project, key) => (
          <ProjectCardVersion2 key={key} {...project} />
        ))}
      </Slider>
    </div>
  )
}
