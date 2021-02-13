var ReactDOM = require('react-dom');
var React = require('react');
import { useState, Component } from 'react';

var PT = require('prop-types');
import { LightgalleryProvider, LightgalleryItem, withLightgallery, useLightgallery } from "react-lightgallery";


import EditorJs from "react-editor-js";

import { EDITOR_JS_TOOLS } from "./constants";

class ReactEditor extends Component {
  render() {
    return (
      <EditorJs
        tools={EDITOR_JS_TOOLS}
        data={{
          blocks : [
              {
                  type : "paragraph",
                  data : {
                      text : "На сайте Baymond представлен анализ юзабилити:&nbsp;<a href=\"https://baymard.com/ux-benchmark\">https://baymard.com/ux-benchmark</a><a href=\"https://baymard.com/ux-benchmark\"></a>"
                  }
              },
              {
                  type : "paragraph",
                  data : {
                      text : "Анализ по следующим типам страниц:"
                  }
              },
              {
                  type : "list",
                  data : {
                      style : "unordered",
                      items : [
                          "Homepage &amp; Category (главная страница и каталог)",
                          "On-Site Search (поиск)",
                          "Product List (списки товаров)",
                          "Cart &amp; Checkout («Корзина» и оформление заказа)",
                          "Accounts (учетная запись)",
                          "Mobile E-Commerce (мобильные версии)<br>"
                      ]
                  }
              },
              {
                  type : "header",
                  data : {
                      text : "Сайты",
                      level : 3
                  }
              },
              {
                  type : "paragraph",
                  data : {
                      text : "Посмотрите блоки на главной, именно структуру."
                  }
              },
              {
                  type : "list",
                  data : {
                      style : "unordered",
                      items : [
                          "https://www.endclothing.com/",
                          "https://www.hufworldwide.com",
                          "https://www.lazyoaf.com",
                          "https://store.tomorrowland.com"
                      ]
                  }
              },
              {
                  type : "linkTool",
                  data : {
                      link : "https://www.awwwards.com/50-fashion-websites.html",
                      meta : {
                          url : "https://www.awwwards.com/50-fashion-websites.html",
                          domain : "www.awwwards.com/50-fashion-websites.html",
                          title : "50 of the Fiercest Fashion Websites",
                          description : "The fashion industry is always looking for the latest trends to soak up, reinterpret, and then relaunch in its own way to the rest of the world. This behaviour...",
                          image : {
                              url : "https://assets.awwwards.com/awards/images/2019/05/50-fashion-thumb3-comp.jpg"
                          }
                      }
                  }
              },
              {
                  type : "linkTool",
                  data : {
                      link : "https://www.awwwards.com/creative-and-unusual-e-commerce-experiences.html",
                      meta : {
                          url : "https://www.awwwards.com/creative-and-unusual-e-commerce-experiences.html",
                          domain : "www.awwwards.com/creative-and-unusual-e-commerce-experiences.html",
                          title : "Creative and Unusual E-Commerce Experiences",
                          description : "Are you looking for some original e-commerce inspiration? It can be quite difficult to find sites dedicated to online shopping that don't follow the same design...",
                          image : {
                              url : "https://assets.awwwards.com/awards/images/2020/09/ecommerce-thumb.jpg"
                          }
                      }
                  }
              },
              {
                  type : "linkTool",
                  data : {
                      link : "https://99designs.com/blog/trends/web-design-trends/",
                      meta : {
                          url : "https://99designs.com/blog/trends/web-design-trends/",
                          domain : "99designs.com/blog/trends/web-design-trends/",
                          title : "The 9 biggest web design trends 2021",
                          description : "Web design trends are constantly changing. We asked some amazing designers what web design trends 2021 they're seeing, and here are the results. Let the latest web trends inspire you.",
                          image : {
                              url : "https://99designs-blog.imgix.net/blog/wp-content/uploads/2020/11/WEB_DESIGN_TRENDS_2021_jpg_9wzuIJ98.jpg?auto=format&amp;q=60&amp;fit=max&amp;w=930"
                          }
                      }
                  }
              },
              {
                  type : "linkTool",
                  data : {
                      link : "https://www.editorx.com/prowebsites/web-design-trends?utm_source=creativeboom&amp;utm_medium=cpc&amp;utm_campaign=ma_edx-brand-trends-creativeboom&amp;experiment_id=article",
                      meta : {
                          url : "https://www.editorx.com/prowebsites/web-design-trends?utm_source=creativeboom&amp;utm_medium=cpc&amp;utm_campaign=ma_edx-brand-trends-creativeboom&amp;experiment_id=article",
                          domain : "www.editorx.com/prowebsites/web-design-trends",
                          title : "Web Design Trends in 2021: The Report",
                          description : "A look at the top 10 web design trends and themes that will dominate the digital design industry in 2021, and the role they’ll play in the work we create.",
                          image : {
                              url : "https://static.wixstatic.com/media/fd027e_639005a581f649f184ca3cfa339c5ecb~mv2.png/v1/fill/w_1200,h_628,al_c/fd027e_639005a581f649f184ca3cfa339c5ecb~mv2.png"
                          }
                      }
                  }
              },
              {
                  type : "linkTool",
                  data : {
                      link : "https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html",
                      meta : {
                          url : "https://www.awwwards.com/30-great-websites-with-parallax-scrolling.html",
                          domain : "www.awwwards.com/30-great-websites-with-parallax-scrolling.html",
                          title : "30 Great Websites with Parallax Scrolling",
                          description : "The parallax effect has been around for years in classic video games, but it&nbsp;became a trend in the web design world. This cool effect is now commonly seen...",
                          image : {
                              url : "https://assets.awwwards.com/awards/images/2020/09/parallax-scrolling-thumb.jpg"
                          }
                      }
                  }
              }
          ],
        }}
      />
    );
  }
}

ReactDOM.render(<ReactEditor />, document.getElementById("text"));




const element = <div class='bg-indigo-500 text-white'>Hello, world</div>;
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
                    <LightgalleryProvider

                        onBeforeOpen={() => console.info("onBeforeOpen")}
                        onAfterOpen={() => console.info("onAfterOpen")}
                        onSlideItemLoad={() => console.info("onSlideItemLoad")}
                        onBeforeSlide={() => console.info("onBeforeSlide")}
                        onAfterSlide={() => console.info("onAfterSlide")}
                        onBeforePrevSlide={() =>
                            console.info("onBeforePrevSlide")
                        }
                        onBeforeNextSlide={() =>
                            console.info("onBeforeNextSlide")
                        }
                        onDragstart={() => console.info("onDragstart")}
                        onDragmove={() => console.info("onDragmove")}
                        onDragend={() => console.info("onDragend")}
                        onSlideClick={() => console.info("onSlideClick")}
                        onBeforeClose={() => console.info("onBeforeClose")}
                        onCloseAfter={() => console.info("onCloseAfter")}
                    >
                        <div className="grid gap-4 grid-cols-4"
                            style={{
                                display: "grid",
                                alignItems: "center",
                                justifyContent: "center",
                            }}
                        >
                            {GROUP1.map((p, idx) => (
                                <PhotoItem
                                    key={idx}
                                    image={p[0]}
                                    thumb={p[1]}
                                    group="group1"
                                />
                            ))}
                        </div>


                    </LightgalleryProvider>
                ) : null}
            </div>
        </div>
    );
}




const rootElement = document.getElementById("app");

ReactDOM.render(<App />, rootElement);
