import ImageBox from '../components/image/ImageBox';

import img from './assets/assets.png'

export default {
    title: 'images/ImageBox',
    component: ImageBox,
    parameters: {
      // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/react/configure/story-layout
      layout: 'centered',
    },
    // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/react/writing-docs/autodocs
    tags: ['autodocs'],
    // More on argTypes: https://storybook.js.org/docs/react/api/argtypes
    argTypes: {
      backgroundColor: { control: 'color' },
    },
};
  
  // More on writing stories with args: https://storybook.js.org/docs/react/writing-stories/args
export const Primary = {
    args: {
      src: 'https://t7.baidu.com/it/u=986208791,1567055894&fm=193&f=GIF',
      wrapperClassName: 'imgBx',
    },
};

export const PrimaryNoSrc = {
    args: {
      wrapperClassName: 'imgBx',
    },
};

export const HasSize = {
    args: {
        src: img,
        wrapperClassName: 'midSize'
      },
}

export const HasMaxSize = {
    args: {
        src: 'https://t7.baidu.com/it/u=986208791,1567055894&fm=193&f=GIF',
        wrapperClassName: 'bigSize'
    }
}

