import React, { useEffect } from "react";

export default function Hero() {
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  function handleScroll() {
    const scroll = window.scrollY;
    const zoom = document.querySelector(".zoom");
    zoom.style.backgroundSize = `${100 + scroll / 5}%`;
    zoom.style.top = `${-(scroll / 10)}%`;
  }

  return (
    <div className="">
      <header class="zoom ">
        <div class="title">
          <h1>Tailwindify</h1>
        </div>
      </header>
      <main role="main">
        <div class="content text-white">
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Curabitur blandit tempus porttitor. Integer posuere erat a ante
            venenatis dapibus posuere velit aliquet. Duis mollis, est non
            commodo luctus, nisi erat porttitor ligula, eget lacinia odio sem
            nec elit. Cras justo odio, dapibus ac facilisis in, egestas eget
            quam. Praesent commodo cursus magna, vel scelerisque nisl
            consectetur et.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
          <p>
            Fusce dapibus, tellus ac cursus commodo, tortor mauris condimentum
            nibh, ut fermentum massa justo sit amet risus. Praesent commodo
            cursus magna, vel scelerisque nisl consectetur et. Maecenas sed diam
            eget risus varius blandit sit amet non magna. Nulla vitae elit
            libero, a pharetra augue. Integer posuere erat a ante venenatis
            dapibus posuere velit aliquet.
          </p>
        </div>
      </main>
    </div>
  );
}
