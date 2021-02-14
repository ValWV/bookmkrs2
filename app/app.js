var ReactDOM = require('react-dom');
var React = require('react');
import { useState, Component } from 'react';

var PT = require('prop-types');
import { LightgalleryProvider, LightgalleryItem, withLightgallery, useLightgallery } from "react-lightgallery";








const GROUP1 = [

  ["./img/product/6b8022291362de16934ca2d6eba8e170.png",  "./img/product/6b8022291362de16934ca2d6eba8e170.png", ],
  ["./img/product/7c555eee7746f8bd819fdf2003c21644.png",  "./img/product/7c555eee7746f8bd819fdf2003c21644.png", ],
  ["./img/product/9b8b4bae8db0f1a90234dbd08e3d7675.png",  "./img/product/9b8b4bae8db0f1a90234dbd08e3d7675.png", ],
  ["./img/product/a42901888f631092ebd79d7e8ddde6de.jpg",  "./img/product/a42901888f631092ebd79d7e8ddde6de.jpg", ],
  ["./img/product/acf90095b199968cef251646d063a262.png", "./img/product/acf90095b199968cef251646d063a262.png", ],
  ["./img/product/aesop_dribbble_003.png", "./img/product/aesop_dribbble_003_large_preview.mp4", ],
  ["./img/product/dd_1551_tech-mp4.png", "./img/product/dd_1551_tech-mp4_large_preview.mp4", ],
  ["./img/product/e-commerce_experiment_pixel_sorting.png", "./img/product/e-commerce_experiment_pixel_sorting.png", ],
  ["./img/product/ezgif-2-00f4d6877f53.png", "./img/product/ezgif-2-00f4d6877f53.png", ],
  ["./img/product/f1de04863d0bafd16cb2d6a4c32b1a47.png", "./img/product/f1de04863d0bafd16cb2d6a4c32b1a47.png", ],
  ["./img/product/f5ea982b050451dabb03d80b93d4cc55.png", "./img/product/f5ea982b050451dabb03d80b93d4cc55.png", ],
  ["./img/product/hanker-dribbble_4x.png", "./img/product/hanker-dribbble_4x.png", ],
  ["./img/product/hanker-mobile-dribbble_4x.png", "./img/product/hanker-mobile-dribbble_4x.png", ],
  ["./img/product/nike_product_ui_2.png", "./img/product/nike_product_ui_2.png", ],
  ["./img/product/octobre_1_still.gif", "./img/product/octobre_1_still.gif", ],
  ["./img/product/panico_4x.png", "./img/product/panico_4x.png", ],
  ["./img/product/paranoia.png", "./img/product/paranoia.png", ],
  ["./img/product/product_page_-_presentation.png", "./img/product/product_page_-_presentation_large_preview.mp4", ],
  ["./img/product/product_page_experience.png", "./img/product/product_page_experience.png", ],
  ["./img/product/_________-1.png", "./img/product/_________-1.png", ],
  ["./img/product/___________2.png", "./img/product/___________2.png",],
];

const GROUP2 = [

  ["./img/showcase/03_product_categories_animation_still_2x.gif"],
  ["./img/showcase/04_women_collection_animation_still_2x.gif"],
  ["./img/showcase/05-me-10mb.png"],
  ["./img/showcase/1a2e51553145237ab4cca5786bf9528b.png"],
  ["./img/showcase/2018_4x.jpg"],
  ["./img/showcase/40c6d0012fb97f99649a143681e8da29.png"],
  ["./img/showcase/493dd7394963cce7010db24dfef23800.jpg"],
  ["./img/showcase/7665604665bfd9e7058ddf5634594dd7.png"],
  ["./img/showcase/99330c420e3d7ddeda50414a9e0b0375.jpg"],
  ["./img/showcase/b856b4ff85a68674183442d90146cc3d.png"],
  ["./img/showcase/bg.png"],
  ["./img/showcase/buffalo_dribbble_still_2x.gif"],
  ["./img/showcase/c063d785de09c57bf702c336af5d0de9.png"],
  ["./img/showcase/composition_4_2_4x.gif"],
  ["./img/showcase/comp_1.png"],
  ["./img/showcase/covetable-picks_4x.png"],
  ["./img/showcase/dddb79cefb786ea42416d328ab7a5749.png"],
  ["./img/showcase/dior._main_page.mp4"],
  ["./img/showcase/dribbble.png"],
  ["./img/showcase/dribbble_1_still_2x.gif"],
  ["./img/showcase/dribbble_2_still_2x.gif"],
  ["./img/showcase/dribbble_still_2x.gif"],
  ["./img/showcase/dribbble_uruoi_product_page_16.08.19.png"],
  ["./img/showcase/dribbble__1__still_2x.gif"],
  ["./img/showcase/dribble_big_4x.png"],
  ["./img/showcase/ezgif-1-a7b47a3ed0e9.png"],
  ["./img/showcase/ezgif.com-optimize-2_still_2x.gif"],
  ["./img/showcase/f3f3ef029ee30ca3b43779782d0acc7c.png"],
  ["./img/showcase/fashion_slider.png"],
  ["./img/showcase/fd11b680f038d09e769c3bbbcd711351.png"],
  ["./img/showcase/hm_grid_final.png"],
  ["./img/showcase/lanco_me_product_card.png"],
  ["./img/showcase/lazy_oaf_dribbble.jpg"],
  ["./img/showcase/lipstick_online_store.mp4", "./img/showcase/lipstick_online_store.png"],
  ["./img/showcase/lookbook-dribbble_still_2x.gif"],
  ["./img/showcase/lookbook_1_still_2x.gif"],
  ["./img/showcase/lookbook_still_2x.gif"],
  ["./img/showcase/main_page__1_3.png"],
  ["./img/showcase/marshmellow.png"],
  ["./img/showcase/marvel.mp4", "./img/showcase/marvel.png"],
  ["./img/showcase/marvel[1].png"],
  ["./img/showcase/navigation_pull_interaction.png"],
  ["./img/showcase/new_bien_studio.mp4", "./img/showcase/new_bien_studio.png"],
  ["./img/showcase/nobel_prize_3.mp4", "./img/showcase/nobel_prize_3.png"],
  ["./img/showcase/rally_adobe_social_compressed.mp4", "./img/showcase/rally_adobe_social_compressed.png"],
  ["./img/showcase/render_1.mp4"],
  ["./img/showcase/rronw_a-dribbble.png"],
  ["./img/showcase/shot.mp4", "./img/showcase/shot.png"],
  ["./img/showcase/stussy_dribbble.jpg"],
  ["./img/showcase/stussy_lookbook_1_still_2x.gif"],
  ["./img/showcase/style-test-new.mp4", "./img/showcase/style-test-new.png"],
  ["./img/showcase/supra-blog_cop.jpg"],
  ["./img/showcase/tw_dribbble_slow_4x.gif"],
  ["./img/showcase/typography_principles.png"],
  ["./img/showcase/untitled-2_still_2x.gif"],
  ["./img/showcase/web_canvas_004.png"],
  ["./img/showcase/_____.png"],

];

const PhotoItem = ({ image, thumb, group }) => (
    <div className='' >
        <LightgalleryItem group={group} src={image} thumb={thumb}>
            <img className='shadow-lg' src={image} style={{ width: "100%" }} />
        </LightgalleryItem>
    </div>
);



PhotoItem.propTypes = {
    image: PT.string.isRequired,
    thumb: PT.string,
    group: PT.string.isRequired,
};


function App() {
    const [visible, setVisible] = useState(true);
    return (
        <div className="content">
            <button
                className="button is-light"
                style={{
                    position: "absolute",
                }}
                onClick={() => setVisible(!visible)}
            >
                {visible ? (
                    <i className="fas fa-eye-slash"></i>
                ) : (
                    <i className="fas fa-eye"></i>
                )}
            </button>

            <div>
                {visible ? (
                    <LightgalleryProvider>

                        <div className="grid gap-4 grid-cols-4"
                            style={{
                                display: "grid",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            {GROUP1.map((p, idx) => (
                                <PhotoItem
                                    key={idx}
                                    image={p[0]}
                                    thumb={p[1]}
                                    group="group1"
                                />
                            ))}
                        </div>
                        <div className="grid gap-4 grid-cols-4"
                            style={{
                                display: "grid",
                                alignItems: "center",
                                justifyContent: "center",
                            }}>
                            {GROUP2.map((p, idx) => (
                                <PhotoItem
                                    key={idx}
                                    image={p[0]}
                                    thumb={p[1]}
                                    group="group2"/>
                            ))}
                        </div>

                    </LightgalleryProvider>
                ) : null}
            </div>
        </div>
    );
}




const rootElement = document.getElementById("app");
const rootElement2 = document.getElementById("appg2");


ReactDOM.render(<App />, rootElement);
