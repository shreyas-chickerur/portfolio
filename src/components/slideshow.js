import { StaticImage } from 'gatsby-plugin-image';
import * as React from 'react'
import {slideshowBg, imageItem,  sliderWrapper, imageList} from './slideshow.module.css'


const Slideshow = ({message, startDelay}) => {
    return (
        
        <div className={slideshowBg}>
            <div style={{textAlign: `center`}}>
                <div style={{color: `white`, fontFamily: `Montserrat`, fontSize: `50px`, margin: `30px`}}>Some Novice Pictures (by me or of me)</div>
            </div>
            <div class="container">
      <div class={sliderWrapper}>
        {/* <button id="prev-slide" class={`slide-button material-symbols-rounded`}>
          chevron_left
        </button> */}
        <ul class={imageList}>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic1.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic2.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic3.jpg"/>
            {/* <StaticImage class={imageItem} src="../images/galleryPics/galleryPic4.jpg"/> */}
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic5.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic6.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic7.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic8.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic9.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic10.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic11.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic12.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic13.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic14.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic15.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic16.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic17.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic18.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic19.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic20.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic21.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic22.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic23.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic24.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic25.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic26.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic27.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic28.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic29.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic30.jpg"/>
            <StaticImage class={imageItem} src="../images/galleryPics/galleryPic31.jpg"/>
            
        </ul>
        {/* <button id="next-slide" class={`slideButton materialSymbolsRounded`}>
          chevron_right
        </button> */}
      </div>
      
    </div>
        </div>
    );
  };
  
export default Slideshow;