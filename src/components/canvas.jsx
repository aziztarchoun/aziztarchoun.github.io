import React from "react";
import "./portfolio-home.css";

function Canvas() {
  return (
    <>
      <button
        class="cta-btn"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasTop"
        aria-controls="offcanvasTop"
      >
        Click me !!!
      </button>

      <div
        class="offcanvas offcanvas-top"
        tabindex="-1"
        id="offcanvasTop"
        aria-labelledby="offcanvasTopLabel"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title" id="offcanvasTopLabel">
            Aslemaaaa
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
            aria-label="Close"
          ></button>
        </div>
        <div class="offcanvas-body">Hello World!</div>
      </div>
    </>
  );
}
export default Canvas;
