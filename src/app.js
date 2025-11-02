function init() {
    document.siteName = $("title").html();
    var e = `<header>\n   <div id="nav">\n   </div>\n</header>\n<div class="loading" id="spinner" style="display:none;">Loading&#8230;</div>\n<div>\n<div id="content" style="padding-top: ${UI.header_padding}px;${UI.fixed_footer ? " padding-bottom: clamp(170px, 100%, 300px);" : ""}">\n</div>\n<div class="modal fade" id="SearchModel" data-bs-backdrop="static" data-bs-keyboard="false" tabindex="-1" aria-labelledby="SearchModelLabel" aria-hidden="true">\n  <div class="modal-dialog" role="document">\n    <div class="modal-content">\n      <div class="modal-header">\n        <h5 class="modal-title" id="SearchModelLabel"></h5>\n        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close">\n          <span aria-hidden="true"></span>\n        </button>\n      </div>\n      <div class="modal-body" id="modal-body-space">\n      </div>\n      <div class="modal-footer" id="modal-body-space-buttons">\n      </div>\n    </div>\n  </div>\n</div>\n<br>\n<footer class="footer mt-auto py-3 text-muted ${UI.footer_style_class}" style="${UI.fixed_footer ? "position: fixed; " : ""}left: 0; bottom: 0; width: 100%; color: white; z-index: 9999;${UI.hide_footer ? " display:none;" : " display:block;"}"> <div class="container" style="width: auto; padding: 0 10px;"> <p class="float-end"> <a href="#">Back to top</a> </p> ${UI.credit ? '<p>Redesigned with <svg width="1em" height="1em" viewBox="0 0 16 16" class="bi bi-heart-fill" fill="red" xmlns="http://www.w3.org/2000/svg"> <path fill-rule="evenodd" d="M8 1.314C12.438-3.248 23.534 4.735 8 15-7.534 4.736 3.562-3.248 8 1.314z" /> </svg> by <a href="https://www.npmjs.com/package/@googledrive/index" target="_blank">TheFirstSpeedster</a>, based on Open Source Softwares.</p>' : ""} <p>© ${UI.copyright_year} - <a href=" ${UI.company_link}" target="_blank"> ${UI.company_name}</a>, All Rights Reserved.</p> </div> </footer>\n  `;
    $("body").html(e)
}
const folder_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,24)"><path fill="rgb(255,159,0)" fill-opacity="1" d=" M16,-12 C16,-12 -2,-12 -2,-12 C-2,-12 -6,-16 -6,-16 C-6,-16 -16,-16 -16,-16 C-18.200000762939453,-16 -20,-14.199999809265137 -20,-12 C-20,-12 -20,12 -20,12 C-20,14.208999633789062 -18.208999633789062,16 -16,16 C-16,16 13.682000160217285,16 13.682000160217285,16 C13.682000160217285,16 20,5 20,5 C20,5 20,-8 20,-8 C20,-10.199999809265137 18.200000762939453,-12 16,-12z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,26)"><path fill="rgb(255,201,40)" fill-opacity="1" d=" M16,-14 C16,-14 -16,-14 -16,-14 C-18.200000762939453,-14 -20,-12.199999809265137 -20,-10 C-20,-10 -20,10 -20,10 C-20,12.199999809265137 -18.200000762939453,14 -16,14 C-16,14 16,14 16,14 C18.200000762939453,14 20,12.199999809265137 20,10 C20,10 20,-10 20,-10 C20,-12.199999809265137 18.200000762939453,-14 16,-14z"></path></g></g></g></svg>'
  , video_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_11)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M16,17 C16,17 -16,17 -16,17 C-18.200000762939453,17 -20,15.199999809265137 -20,13 C-20,13 -20,-9 -20,-9 C-20,-9 20,-9 20,-9 C20,-9 20,13 20,13 C20,15.199999809265137 18.200000762939453,17 16,17z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M16,-9 C16,-9 12,-3 12,-3 C12,-3 16,-3 16,-3 C16,-3 20,-9 20,-9 C20,-9 16,-9 16,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M8,-9 C8,-9 4,-3 4,-3 C4,-3 8,-3 8,-3 C8,-3 12,-9 12,-9 C12,-9 8,-9 8,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M0,-9 C0,-9 -4,-3 -4,-3 C-4,-3 0,-3 0,-3 C0,-3 4,-9 4,-9 C4,-9 0,-9 0,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-8,-9 C-8,-9 -12,-3 -12,-3 C-12,-3 -8,-3 -8,-3 C-8,-3 -4,-9 -4,-9 C-4,-9 -8,-9 -8,-9z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-16,-9 C-16,-9 -20,-3 -20,-3 C-20,-3 -16,-3 -16,-3 C-16,-3 -12,-9 -12,-9 C-12,-9 -16,-9 -16,-9z"></path></g></g></g><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(63,81,181)" fill-opacity="1" d=" M19.399999618530273,-15.699999809265137 C19.399999618530273,-15.699999809265137 -20,-9 -20,-9 C-20,-9 -20.299999237060547,-11 -20.299999237060547,-11 C-20.700000762939453,-13.199999809265137 -19.200000762939453,-15.199999809265137 -17,-15.600000381469727 C-17,-15.600000381469727 14.600000381469727,-20.899999618530273 14.600000381469727,-20.899999618530273 C16.799999237060547,-21.299999237060547 18.799999237060547,-19.799999237060547 19.200000762939453,-17.600000381469727 C19.200000762939453,-17.600000381469727 19.399999618530273,-15.699999809265137 19.399999618530273,-15.699999809265137z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-5.199999809265137,-17.600000381469727 C-5.199999809265137,-17.600000381469727 -0.30000001192092896,-12.300000190734863 -0.30000001192092896,-12.300000190734863 C-0.30000001192092896,-12.300000190734863 3.700000047683716,-13 3.700000047683716,-13 C3.700000047683716,-13 -1.2999999523162842,-18.299999237060547 -1.2999999523162842,-18.299999237060547 C-1.2999999523162842,-18.299999237060547 -5.199999809265137,-17.600000381469727 -5.199999809265137,-17.600000381469727z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-13.100000381469727,-16.299999237060547 C-13.100000381469727,-16.299999237060547 -8.199999809265137,-11 -8.199999809265137,-11 C-8.199999809265137,-11 -4.199999809265137,-11.699999809265137 -4.199999809265137,-11.699999809265137 C-4.199999809265137,-11.699999809265137 -9.199999809265137,-16.899999618530273 -9.199999809265137,-16.899999618530273 C-9.199999809265137,-16.899999618530273 -13.100000381469727,-16.299999237060547 -13.100000381469727,-16.299999237060547z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M2.700000047683716,-18.899999618530273 C2.700000047683716,-18.899999618530273 7.599999904632568,-13.699999809265137 7.599999904632568,-13.699999809265137 C7.599999904632568,-13.699999809265137 11.5,-14.300000190734863 11.5,-14.300000190734863 C11.5,-14.300000190734863 6.599999904632568,-19.600000381469727 6.599999904632568,-19.600000381469727 C6.599999904632568,-19.600000381469727 2.700000047683716,-18.899999618530273 2.700000047683716,-18.899999618530273z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M10.5,-20.200000762939453 C10.5,-20.200000762939453 15.5,-15 15.5,-15 C15.5,-15 19.399999618530273,-15.699999809265137 19.399999618530273,-15.699999809265137 C19.399999618530273,-15.699999809265137 14.5,-20.899999618530273 14.5,-20.899999618530273 C14.5,-20.899999618530273 10.5,-20.200000762939453 10.5,-20.200000762939453z"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(159,168,218)" fill-opacity="1" d=" M-16.5,-14 C-17.327999114990234,-14 -18,-13.32800006866455 -18,-12.5 C-18,-11.67199993133545 -17.327999114990234,-11 -16.5,-11 C-15.67199993133545,-11 -15,-11.67199993133545 -15,-12.5 C-15,-13.32800006866455 -15.67199993133545,-14 -16.5,-14z"></path></g></g></g></svg>'
  , code_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_2)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,21)"><path fill="rgb(83,109,121)" fill-opacity="1" d=" M-18,-13 C-18,-13 18,-13 18,-13 C18,-13 18,13 18,13 C18,13 -18,13 -18,13 C-18,13 -18,-13 -18,-13z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24,20.5)"><path fill="rgb(186,222,250)" fill-opacity="1" d=" M-16,-10.5 C-16,-10.5 16,-10.5 16,-10.5 C16,-10.5 16,10.5 16,10.5 C16,10.5 -16,10.5 -16,10.5 C-16,10.5 -16,-10.5 -16,-10.5z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24,37)"><path fill="rgb(69,90,99)" fill-opacity="1" d=" M-3,-3 C-3,-3 3,-3 3,-3 C3,-3 3,0 3,0 C3,0 -3,0 -3,0 C-3,0 -3,-3 -3,-3z M9,0 C9,0 -9,0 -9,0 C-11,0 -11,2 -11,2 C-11,2 -11,3 -11,3 C-11,3 11,3 11,3 C11,3 11,2 11,2 C11,2 11,0 9,0z"></path></g></g><g transform="matrix(0.8999999761581421,0,0,0.8999999761581421,2.2750015258789062,-1.0999984741210938)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,15.315999984741211,24.465999603271484)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-0.8989999890327454,0.02500000037252903 C-0.8989999890327454,0.02500000037252903 3.684000015258789,2.0399999618530273 3.684000015258789,2.0399999618530273 C3.684000015258789,2.0399999618530273 3.684000015258789,4.894999980926514 3.684000015258789,4.894999980926514 C3.684000015258789,4.894999980926514 -3.684000015258789,1.2100000381469727 -3.684000015258789,1.2100000381469727 C-3.684000015258789,1.2100000381469727 -3.684000015258789,-1.1990000009536743 -3.684000015258789,-1.1990000009536743 C-3.684000015258789,-1.1990000009536743 3.684000015258789,-4.894999980926514 3.684000015258789,-4.894999980926514 C3.684000015258789,-4.894999980926514 3.684000015258789,-2.0399999618530273 3.684000015258789,-2.0399999618530273 C3.684000015258789,-2.0399999618530273 -0.8989999890327454,0.02500000037252903 -0.8989999890327454,0.02500000037252903z"></path></g><g opacity="1" transform="matrix(-1,0,0,-1,32.70000076293945,24.465999603271484)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-0.8989999890327454,0.02500000037252903 C-0.8989999890327454,0.02500000037252903 3.684000015258789,2.0399999618530273 3.684000015258789,2.0399999618530273 C3.684000015258789,2.0399999618530273 3.684000015258789,4.894999980926514 3.684000015258789,4.894999980926514 C3.684000015258789,4.894999980926514 -3.684000015258789,1.2100000381469727 -3.684000015258789,1.2100000381469727 C-3.684000015258789,1.2100000381469727 -3.684000015258789,-1.1990000009536743 -3.684000015258789,-1.1990000009536743 C-3.684000015258789,-1.1990000009536743 3.684000015258789,-4.894999980926514 3.684000015258789,-4.894999980926514 C3.684000015258789,-4.894999980926514 3.684000015258789,-2.0399999618530273 3.684000015258789,-2.0399999618530273 C3.684000015258789,-2.0399999618530273 -0.8989999890327454,0.02500000037252903 -0.8989999890327454,0.02500000037252903z"></path></g><g opacity="1" transform="matrix(1,0,0,1,24.240999221801758,24)"><path fill="rgb(21,101,192)" fill-opacity="1" d=" M-1.1649999618530273,7.986000061035156 C-1.1649999618530273,7.986000061035156 -3.259000062942505,7.986000061035156 -3.259000062942505,7.986000061035156 C-3.259000062942505,7.986000061035156 1.1619999408721924,-7.916999816894531 1.1619999408721924,-7.916999816894531 C1.1619999408721924,-7.916999816894531 3.259000062942505,-7.916999816894531 3.259000062942505,-7.916999816894531 C3.259000062942505,-7.916999816894531 -1.1649999618530273,7.986000061035156 -1.1649999618530273,7.986000061035156z"></path></g></g></g></svg>'
  , zip_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 32 32"><g transform="translate(0 -1020.362)"><path fill="#e9eded" fill-rule="evenodd" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49822,1027.8658 0,21.5 c 0,0.831 -0.66899,1.5 -1.49998,1.5 l -18.00004,0 c -0.83099,0 -1.49998,-0.669 -1.49998,-1.5 l 0,-26 c 0,-0.831 0.66899,-1.5 1.49998,-1.5 l 13.50002,0 z"/><path fill="#4bbfeb" d="m 4.99822,1044.3658 0,2 0,2 0,1 c 0,1.108 0.89198,2 2,2 l 18,0 c 1.10802,0 2,-0.892 2,-2 l 0,-1 0,-2 0,-2 -2,0 -18,0 -2,0 z"/><path fill="#4bbfeb" stroke="#4bbfeb" stroke-linecap="round" stroke-linejoin="round" d="m 26.49466,1027.8658 -4.49997,0 c -0.83099,0 -1.49998,-0.6691 -1.49998,-1.5 l 0,-4.5"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#4bbfeb" fill-rule="evenodd" d="M 15.498047 7 L 15.498047 8 L 14.498047 8 L 14.498047 9 L 15.498047 9 L 15.498047 10 L 14.498047 10 L 14.498047 11 L 15.498047 11 L 15.498047 12 L 14.498047 12 L 14.498047 13 L 15.498047 13 L 15.498047 14 L 14.498047 14 L 14.498047 15 L 15.498047 15 L 15.498047 16 L 14.498047 16 L 14.498047 17 L 15.498047 17 L 15.498047 18 L 14.998047 18 A 0.50004997 0.50004997 0 0 0 14.498047 18.5 L 14.498047 19.464844 A 0.50004997 0.50004997 0 0 0 14.498047 19.5 L 14.498047 20 L 14.498047 20.5 C 14.498047 21.3224 15.175696 22 15.998047 22 C 16.820398 22 17.498047 21.3224 17.498047 20.5 L 17.498047 20.033203 A 0.50004997 0.50004997 0 0 0 17.498047 20 L 17.498047 19.5 L 17.498047 18.5 A 0.50004997 0.50004997 0 0 0 16.998047 18 L 16.498047 18 L 16.498047 17 L 17.498047 17 L 17.498047 16 L 16.498047 16 L 16.498047 15 L 17.498047 15 L 17.498047 14 L 16.498047 14 L 16.498047 13 L 17.498047 13 L 17.498047 12 L 16.498047 12 L 16.498047 11 L 17.498047 11 L 17.498047 10 L 16.498047 10 L 16.498047 9 L 17.498047 9 L 17.498047 8 L 16.498047 8 L 16.498047 7 L 15.498047 7 z M 15.498047 19 L 16.498047 19 L 16.498047 19.5 L 16.498047 20.5 C 16.498047 20.7857 16.283696 21 15.998047 21 C 15.712398 21 15.498047 20.7857 15.498047 20.5 L 15.498047 20.033203 A 0.50004997 0.50004997 0 0 0 15.498047 20 L 15.498047 19.5 L 15.498047 19 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/><path style="line-height:normal;text-indent:0;text-align:start;text-decoration-line:none;text-decoration-style:solid;text-decoration-color:#000;text-transform:none;block-progression:tb;isolation:auto;mix-blend-mode:normal" fill="#e9eded" fill-rule="evenodd" d="M 13.490234 24.990234 A 0.50005 0.50005 0 0 0 12.998047 25.496094 L 12.998047 29.498047 A 0.50005 0.50005 0 1 0 13.998047 29.498047 L 13.998047 25.496094 A 0.50005 0.50005 0 0 0 13.490234 24.990234 z M 11.511719 24.998047 A 0.50005 0.50005 0 0 0 11.460938 25 L 8.5058594 25 A 0.50005 0.50005 0 1 0 8.5058594 26 L 10.498047 26 L 8.1347656 29.154297 A 0.50005 0.50005 0 0 0 8.4375 29.992188 A 0.50019268 0.50019268 0 0 0 8.4472656 29.994141 A 0.50005 0.50005 0 0 0 8.5058594 29.998047 L 11.494141 29.998047 A 0.50005 0.50005 0 1 0 11.494141 28.998047 L 9.5019531 28.998047 L 11.865234 25.841797 A 0.50005 0.50005 0 0 0 11.75 25.066406 A 0.50005 0.50005 0 0 0 11.720703 25.050781 A 0.50005 0.50005 0 0 0 11.705078 25.042969 A 0.50005 0.50005 0 0 0 11.675781 25.03125 A 0.50005 0.50005 0 0 0 11.658203 25.025391 A 0.50005 0.50005 0 0 0 11.511719 24.998047 z M 16.498047 25.003906 C 15.723646 25.003906 15.086569 25.606569 15.013672 26.363281 C 15.013355 26.366575 15.012014 26.369747 15.011719 26.373047 A 0.50005 0.50005 0 0 0 14.998047 26.498047 C 14.998039 26.500027 14.998047 26.501925 14.998047 26.503906 L 14.998047 29.498047 A 0.50005 0.50005 0 1 0 15.998047 29.498047 L 15.998047 27.910156 C 16.155295 27.966775 16.322382 28.003906 16.498047 28.003906 C 17.320552 28.003906 17.998047 27.326406 17.998047 26.503906 C 17.998047 25.681406 17.320552 25.003906 16.498047 25.003906 z M 16.498047 26.003906 C 16.780112 26.003906 16.998047 26.221906 16.998047 26.503906 C 16.998047 26.786006 16.780112 27.003906 16.498047 27.003906 C 16.215982 27.003906 15.998047 26.786006 15.998047 26.503906 L 15.998047 26.498047 C 16.001131 26.218978 16.217997 26.003906 16.498047 26.003906 z " color="#000" font-family="sans-serif" font-weight="400" overflow="visible" transform="translate(0 1020.362)"/></g></svg>'
  , image_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_19)"><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(245,124,0)" fill-opacity="1" d=" M16,17 C16,17 -16,17 -16,17 C-18.200000762939453,17 -20,15.199999809265137 -20,13 C-20,13 -20,-13 -20,-13 C-20,-15.199999809265137 -18.200000762939453,-17 -16,-17 C-16,-17 16,-17 16,-17 C18.200000762939453,-17 20,-15.199999809265137 20,-13 C20,-13 20,13 20,13 C20,15.199999809265137 18.200000762939453,17 16,17z"></path></g></g><g transform="matrix(1,0,0,1,35,16)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,249,196)" fill-opacity="1" d=" M0,-3 C-1.656999945640564,-3 -3,-1.656999945640564 -3,0 C-3,1.656999945640564 -1.656999945640564,3 0,3 C1.656999945640564,3 3,1.656999945640564 3,0 C3,-1.656999945640564 1.656999945640564,-3 0,-3z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,20,24)"><path fill="rgb(148,42,9)" fill-opacity="1" d=" M0,-8 C0,-8 -11,8 -11,8 C-11,8 11,8 11,8 C11,8 0,-8 0,-8z"></path></g><g opacity="1" transform="matrix(1,0,0,1,31,27)"><path fill="rgb(191,54,12)" fill-opacity="1" d=" M0,-5 C0,-5 -8,5 -8,5 C-8,5 8,5 8,5 C8,5 0,-5 0,-5z"></path></g></g></g></svg>'
  , audio_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_30)"><g mask="url(#__lottie_element_41)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(129,211,249)" stroke-opacity="1" stroke-width="2" d=" M-16,0 C-16,-8.836000442504883 -8.836000442504883,-16 0,-16 C0.6779999732971191,-16 1.3450000286102295,-15.958000183105469 2,-15.87600040435791 C9.892999649047852,-14.892000198364258 16,-8.159000396728516 16,0 C16,8.159000396728516 9.892999649047852,14.892000198364258 2,15.87600040435791 C1.3450000286102295,15.958000183105469 0.6779999732971191,16 0,16 C-8.836000442504883,16 -16,8.836999893188477 -16,0z"></path></g></g><g mask="url(#__lottie_element_38)" style="display: none;" transform="matrix(1,0,0,1,0,0)" opacity="1"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(129,211,249)" stroke-opacity="1" stroke-width="2" d=" M-16,0 C-16,-8.836000442504883 -8.836000442504883,-16 0,-16 C0.6779999732971191,-16 1.3450000286102295,-15.958000183105469 2,-15.87600040435791 C9.892999649047852,-14.892000198364258 16,-8.159000396728516 16,0 C16,8.159000396728516 9.892999649047852,14.892000198364258 2,15.87600040435791 C1.3450000286102295,15.958000183105469 0.6779999732971191,16 0,16 C-8.836000442504883,16 -16,8.836999893188477 -16,0z"></path></g></g><g mask="url(#__lottie_element_35)" transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(79,195,247)" stroke-opacity="1" stroke-width="2" d=" M-11,0 C-11,-6.074999809265137 -6.074999809265137,-11 0,-11 C0.6830000281333923,-11 1.3519999980926514,-10.937999725341797 2,-10.819000244140625 C7.119999885559082,-9.878000259399414 11,-5.392000198364258 11,0 C11,5.39300012588501 7.119999885559082,9.878000259399414 2,10.817999839782715 C1.3519999980926514,10.937999725341797 0.6830000281333923,11 0,11 C-6.074999809265137,11 -11,6.074999809265137 -11,0z"></path></g><g opacity="1" transform="matrix(1,0,0,1,26,24)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(3,169,244)" stroke-opacity="1" stroke-width="2" d=" M-6,0 C-6,-3.312999963760376 -3.312999963760376,-6 0,-6 C0.7009999752044678,-6 1.375,-5.880000114440918 2,-5.658999919891357 C4.329999923706055,-4.835000038146973 6,-2.611999988555908 6,0 C6,2.611999988555908 4.329999923706055,4.835000038146973 2,5.6579999923706055 C1.375,5.880000114440918 0.7009999752044678,6 0,6 C-3.312999963760376,6 -6,3.312999963760376 -6,0z"></path></g></g><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,9.5,24)"><path fill="rgb(83,109,121)" fill-opacity="1" d=" M4.5,8 C4.5,8 -2.5,8 -2.5,8 C-3.6050000190734863,8 -4.5,7.105000019073486 -4.5,6 C-4.5,6 -4.5,-6 -4.5,-6 C-4.5,-7.105000019073486 -3.6050000190734863,-8 -2.5,-8 C-2.5,-8 4.5,-8 4.5,-8 C4.5,-8 4.5,8 4.5,8z"></path></g><g opacity="1" transform="matrix(1,0,0,1,20,24)"><path fill="rgb(120,144,156)" fill-opacity="1" d=" M6,18 C6,18 -6,8 -6,8 C-6,8 -6,-8 -6,-8 C-6,-8 6,-18 6,-18 C6,-18 6,18 6,18z"></path></g></g></g></svg>'
  , markdown_icon = '<svg width="1.5em" height="1.5em" viewBox="0 0 1024 1024"><path d="M265.61429932 63.6656706h493.57455644c111.51629209 0 201.91670068 90.40220771 201.91670068 201.91580157v493.57545556c0 111.51449297-90.40040859 201.91670068-201.91670068 201.91670069H265.61429932c-111.51539297 0-201.91580068-90.40220771-201.91580069-201.91670069V265.58147217c0-111.51359385 90.40040859-201.91580068 201.91580069-201.91580157z" fill="#707070"></path><path d="M763.60576133 722.16141084L670.49099316 599.42972305h48.19382491V302.57788818h89.84188652v296.85183487h48.19382491L763.60576133 722.16141084zM519.02738545 472.82885791c0-13.71570117 0.30399346-28.21926709 0.91827773-43.48821445l-13.67612753 19.09855107c-0.1726831 0.54323174-0.34626533 1.10265205-0.52074757 1.62609698l-7.15195107 10.50577734-109.52234384 166.63092451-40.52562364-62.91054668h-0.25092949l-28.34248359-44.38850449-41.19926749-63.95563828h0.36425304l-8.60086846-13.47016729-0.46318536-1.8752291-14.42082305-21.30475518c1.05318633 33.22347451 1.60451191 57.42426622 1.60451192 72.50254365v229.53787296h-89.15835059V303.99532753h140.37862325l77.89348828 115.26944679h1.3346956l80.12037832-115.26944678H610.08255019v417.34224141H519.02828457V472.82885791z" fill="#ffffff"></path></svg>'
  , pdf_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_44)"><g transform="matrix(1,0,0,1,0,0)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,24,24)"><path fill="rgb(255,87,34)" fill-opacity="1" d=" M16,21 C16,21 -16,21 -16,21 C-16,21 -16,-21 -16,-21 C-16,-21 6,-21 6,-21 C6,-21 16,-11 16,-11 C16,-11 16,21 16,21z"></path></g><g opacity="1" transform="matrix(1,0,0,1,33.75,9.25)"><path fill="rgb(251,233,231)" fill-opacity="1" d=" M4.75,4.75 C4.75,4.75 -4.75,4.75 -4.75,4.75 C-4.75,4.75 -4.75,-4.75 -4.75,-4.75 C-4.75,-4.75 4.75,4.75 4.75,4.75z"></path></g></g><g transform="matrix(1,0,0,1,24,24)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path fill="rgb(255,255,255)" fill-opacity="1" d=" M-8,15 C-8.399999618530273,15 -8.699999809265137,14.899999618530273 -9,14.800000190734863 C-10.100000381469727,14.199999809265137 -10.199999809265137,13.300000190734863 -10,12.600000381469727 C-9.600000381469727,11.399999618530273 -7.400000095367432,9.899999618530273 -4.5,8.600000381469727 C-4.5,8.600000381469727 -4.5,8.600000381469727 -4.5,8.600000381469727 C-3.200000047683716,6.199999809265137 -2.200000047683716,3.700000047683716 -1.600000023841858,1.600000023841858 C-2.5999999046325684,-0.30000001192092896 -3.0999999046325684,-2.0999999046325684 -3.0999999046325684,-3.4000000953674316 C-3.0999999046325684,-4.099999904632568 -2.9000000953674316,-4.699999809265137 -2.5999999046325684,-5.199999809265137 C-2.200000047683716,-5.699999809265137 -1.600000023841858,-6 -0.800000011920929,-6 C0.10000000149011612,-6 0.800000011920929,-5.5 1.100000023841858,-4.599999904632568 C1.600000023841858,-3.4000000953674316 1.2999999523162842,-1.2000000476837158 0.6000000238418579,1.2999999523162842 C1.600000023841858,3 2.799999952316284,4.599999904632568 4.099999904632568,5.800000190734863 C6,5.400000095367432 7.699999809265137,5.199999809265137 8.800000190734863,5.400000095367432 C10.699999809265137,5.699999809265137 11,7 11,7.5 C11,9.600000381469727 8.800000190734863,9.600000381469727 8,9.600000381469727 C6.5,9.600000381469727 5,9 3.700000047683716,7.900000095367432 C3.700000047683716,7.900000095367432 3.700000047683716,7.900000095367432 3.700000047683716,7.900000095367432 C1.2999999523162842,8.5 -1.100000023841858,9.300000190734863 -3,10.199999809265137 C-4,11.899999618530273 -5,13.300000190734863 -5.900000095367432,14.100000381469727 C-6.800000190734863,14.800000190734863 -7.5,15 -8,15z M-6.800000190734863,12.100000381469727 C-7.300000190734863,12.399999618530273 -7.699999809265137,12.699999809265137 -7.900000095367432,13 C-7.699999809265137,12.899999618530273 -7.300000190734863,12.699999809265137 -6.800000190734863,12.100000381469727z M6.800000190734863,7.400000095367432 C7.199999809265137,7.5 7.599999904632568,7.599999904632568 8,7.599999904632568 C8.600000381469727,7.599999904632568 8.899999618530273,7.5 9,7.5 C9,7.5 9,7.5 9,7.5 C8.899999618530273,7.400000095367432 8.199999809265137,7.199999809265137 6.800000190734863,7.400000095367432z M-0.20000000298023224,3.799999952316284 C-0.6000000238418579,5 -1.2000000476837158,6.300000190734863 -1.7000000476837158,7.5 C-0.5,7.099999904632568 0.699999988079071,6.699999809265137 1.899999976158142,6.400000095367432 C1.100000023841858,5.599999904632568 0.4000000059604645,4.699999809265137 -0.20000000298023224,3.799999952316284z M-0.800000011920929,-4 C-0.8999999761581421,-4 -0.8999999761581421,-4 -0.8999999761581421,-4 C-1,-3.9000000953674316 -1.100000023841858,-3.200000047683716 -0.699999988079071,-1.7000000476837158 C-0.6000000238418579,-2.9000000953674316 -0.6000000238418579,-3.799999952316284 -0.800000011920929,-4z"></path></g></g></g></svg>'
  , file_icon = '<svg xmlns="http://www.w3.org/2000/svg" width="1.5em" height="1.5em" viewBox="0 0 48 48" preserveAspectRatio="xMidYMid meet"><g clip-path="url(#__lottie_element_63)"><g transform="matrix(1,0,0,1,7.75,2.75)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,16.25,21.25)"><path fill="rgb(144,201,248)" fill-opacity="1" d=" M16,21 C16,21 -16,21 -16,21 C-16,21 -16,-21 -16,-21 C-16,-21 6,-21 6,-21 C6,-21 16,-11 16,-11 C16,-11 16,21 16,21z"></path></g></g><g transform="matrix(1,0,0,1,15,21)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,1 C1,1 18,1 18,1"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,5 C1,5 14,5 14,5"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,9 C1,9 18,9 18,9"></path></g><g opacity="1" transform="matrix(1,0,0,1,0,0)"><path stroke-linecap="butt" stroke-linejoin="miter" fill-opacity="0" stroke-miterlimit="10" stroke="rgb(24,118,210)" stroke-opacity="1" stroke-width="2" d=" M1,13 C1,13 14,13 14,13"></path></g></g><g transform="matrix(1,0,0,1,28.75,4.25)" opacity="1" style="display: block;"><g opacity="1" transform="matrix(1,0,0,1,5,5)"><path fill="rgb(224,245,253)" fill-opacity="1" d=" M4.75,4.75 C4.75,4.75 -4.75,4.75 -4.75,4.75 C-4.75,4.75 -4.75,-4.75 -4.75,-4.75 C-4.75,-4.75 0,0 0,0 C0,0 4.75,4.75 4.75,4.75z"></path></g></g></g></svg>'
  , Os = {
    isWindows: navigator.userAgent.toUpperCase().indexOf("WIN") > -1,
    isMac: navigator.userAgent.toUpperCase().indexOf("MAC") > -1,
    isMacLike: /(Mac|iPhone|iPod|iPad)/i.test(navigator.userAgent),
    isIos: /(iPhone|iPod|iPad)/i.test(navigator.userAgent),
    isMobile: /Android|webOS|iPhone|iPad|iPod|iOS|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent)
};
function getDocumentHeight() {
    var e = document;
    return Math.max(e.body.scrollHeight, e.documentElement.scrollHeight, e.body.offsetHeight, e.documentElement.offsetHeight, e.body.clientHeight, e.documentElement.clientHeight)
}
function getQueryVariable(e) {
    for (var t, n = window.location.search.substring(1).split("&"), a = 0; a < n.length; a++)
        if ((t = n[a].split("="))[0] == e)
            return t[1];
    return !1
}
function render(e) {
    e.indexOf("?") > 0 && (e = e.substr(0, e.indexOf("?"))),
    title(e),
    nav(e);
    if (e.includes("/fallback")) {
        window.scroll_status = {
            event_bound: !1,
            loading_lock: !1
        };
        const e = getQueryVariable("a")
          , t = getQueryVariable("id");
        return e ? fallback(t, !0) : list(null, t, !0)
    }
    window.MODEL.is_search_page ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    },
    render_search_result_list()) : e.match(/\/\d+:$/g) || "/" == e.slice(-1) ? (window.scroll_status = {
        event_bound: !1,
        loading_lock: !1
    },
    list(e)) : file(e)
}
function title(e) {
    e = decodeURI(e);
    var t = window.current_drive_order || 0
      , n = window.drive_names[t];
    e = e.replace(`/${t}:`, "");
    var a = window.MODEL;
    a.is_search_page ? $("title").html(`${n} - Resultados da Busca for ${a.q} `) : $("title").html(`${n} - ${e}`)
}
function nav(e) {
    var t = window.MODEL
      , n = ""
      , a = window.current_drive_order || 0;
    n += `<nav class="navbar navbar-expand-lg${UI.fixed_header ? " fixed-top" : ""} ${UI.header_style_class}">\n    <div class="container-fluid">\n  <a class="navbar-brand" href="/">${UI.logo_image ? '<img border="0" alt="' + UI.company_name + '" src="' + UI.logo_link_name + '" height="' + UI.logo_height + '" width="' + UI.logo_width + '">' : UI.logo_link_name}</a>\n  <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">\n    <span class="navbar-toggler-icon"></span>\n  </button>\n  <div class="collapse navbar-collapse" id="navbarSupportedContent">\n    <ul class="navbar-nav me-auto mb-2 mb-lg-0">\n      <li class="nav-item">\n        <a class="nav-link" href="/${a}:/">${UI.nav_link_1}</a>\n      </li>`;
    var i = window.drive_names
      , o = window.drive_names[a];
    n += `<li class="nav-item dropdown"><a class="nav-link dropdown-toggle" href="#" id="navbarDropdown" role="button" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">${o}</a><div class="dropdown-menu" aria-labelledby="navbarDropdown">`,
    i.forEach(((e,t)=>{
        n += `<a class="dropdown-item"  href="/${t}:/">${e}</a>`
    }
    )),
    n += "</div></li>",
    n += `<li class="nav-item">\n </li>${UI.show_logout_button ? '<li class="nav-item"><a class="nav-link" href="/logout">Sair</a></li>' : ""}`;
    // Get user info from global variables
    var userName = window.userInfo ? window.userInfo.name : null;
    var userMembersince = window.userInfo ? window.userInfo.membersince : null;
    
    // Build user info section
    var userInfoSection = '';
    if (userName) {
        userInfoSection += `<span class="navbar-text me-3">Bons estudos, <strong>${userName}</strong></span>`;
    }
    if (userMembersince) {
        userInfoSection += `<span class="navbar-text">Membro desde: <strong>${userMembersince}</strong></span>`;
    }
    
    var l = `\n</ul>\n<div class="d-flex align-items-center">\n    <!-- User Info Section -->\n    <div class="d-flex flex-column flex-lg-row align-items-center me-lg-3">\n        ${userInfoSection}\n    </div>\n    <!-- Search Form -->\n    <form class="d-flex" method="get" action="/${a}:search">\n        <input class="form-control me-2" name="q" type="search" aria-label="Buscar" placeholder=Pesquisar no diretório..." value="${t.is_search_page && t.q || ""}" required>\n        <button class="btn ${UI.search_button_class}" onclick="if($('#search_bar_form>input').val()) $('#search_bar_form').submit();" type="submit">Buscar</button>\n    </form>\n</div>\n</div>\n</div>\n</nav>\n`;
    t.root_type < 2 && (n += l),
    $("#nav").html(n)
}
function sleep(e) {
    const t = Date.now();
    let n = null;
    do {
        n = Date.now()
    } while (n - t < e)
}
function requestListPath(e, t, n, a, i=3, o=!1) {
    var l = {
        id: t.id || "",
        type: "folder",
        password: t.password || "",
        page_token: t.page_token || "",
        page_index: t.page_index || 0
    };
    $("#update").show(),
    document.getElementById("update").innerHTML = "<div class='alert alert-info' role='alert'> Conectando...</div></div></div>",
    o && (e = "/0:fallback"),
    function t() {
        fetch(o ? "/0:fallback" : e, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(l)
        }).then((function(e) {
            if (!e.ok)
                throw new Error("Request failed");
            return e.json()
        }
        )).then((function(t) {
            t && t.error && 401 === t.error.code ? askPassword(e) : t && null === t.data ? (document.getElementById("spinner").remove(),
            document.getElementById("list").innerHTML = "<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>",
            $("#update").hide()) : t && t.data && (n(t, e, l),
            $("#update").hide())
        }
        )).catch((function(e) {
            i > 0 ? (sleep(2e3),
            document.getElementById("update").innerHTML = "<div class='alert alert-info' role='alert'> Tentando novamente...</div></div></div>",
            t()) : (document.getElementById("update").innerHTML = "<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong.</div></div></div>",
            document.getElementById("list").innerHTML = "<div class='alert alert-danger' role='alert'> We were unable to get data from the server. " + e + "</div></div></div>",
            $("#update").hide())
        }
        ))
    }()
}
function requestSearch(e, t, n=3) {
    var a = {
        q: e.q || null,
        page_token: e.page_token || null,
        page_index: e.page_index || 0
    };
    $("#update").html("<div class='alert alert-info' role='alert'> Conectando...</div></div></div>"),
    function e(n) {
        fetch(`/${window.current_drive_order}:search`, {
            method: "POST",
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(a)
        }).then((function(e) {
            if (!e.ok)
                throw new Error("Request failed");
            return e.json()
        }
        )).then((function(e) {
            e && null === e.data && ($("#spinner").remove(),
            $("#list").html("<div class='alert alert-danger' role='alert'> Server didn't send any data.</div></div></div>"),
            $("#update").remove()),
            e && e.data && (t && t(e, a),
            $("#update").remove())
        }
        )).catch((function(t) {
            n > 0 ? (sleep(2e3),
            $("#update").html("<div class='alert alert-info' role='alert'> Tentando novamente...</div></div></div>"),
            e(n - 1)) : ($("#update").html("<div class='alert alert-danger' role='alert'> Unable to get data from the server. Something went wrong. 3 Failures</div></div></div>"),
            $("#list").html("<div class='alert alert-danger' role='alert'> We were unable to get data from the server.</div></div></div>"),
            $("#spinner").remove())
        }
        ))
    }(n)
}
function list(e, t="", n=!1) {
    var a = `<div class="container">${UI.fixed_header ? "<br>" : ""}\n    <style>\n      .path-navigation-container {\n        margin-bottom: 1rem;\n        padding: 0.75rem 1rem;\n        background: rgba(0,0,0,0.02);\n        border-radius: 8px;\n        border-left: 4px solid #007bff;\n        transition: all 0.3s ease;\n      }\n      [data-theme="dark"] .path-navigation-container {\n        background: rgba(255,255,255,0.05);\n        border-left-color: #0d6efd;\n      }\n      .path-navigation-container:hover {\n        background: rgba(0,0,0,0.04);\n        box-shadow: 0 2px 4px rgba(0,0,0,0.05);\n      }\n      [data-theme="dark"] .path-navigation-container:hover {\n        background: rgba(255,255,255,0.08);\n      }\n      .breadcrumb {\n        margin-bottom: 0;\n        background: transparent;\n        padding: 0;\n      }\n      .breadcrumb-item a {\n        text-decoration: none;\n        color: #007bff;\n        transition: all 0.2s ease;\n        display: inline-flex;\n        align-items: center;\n      }\n      [data-theme="dark"] .breadcrumb-item a {\n        color: #0d6efd;\n      }\n      .breadcrumb-item a:hover {\n        color: #0056b3;\n        transform: translateX(2px);\n      }\n      [data-theme="dark"] .breadcrumb-item a:hover {\n        color: #3d8bfd;\n      }\n      .breadcrumb-item.active {\n        color: #6c757d;\n        font-weight: 500;\n      }\n      [data-theme="dark"] .breadcrumb-item.active {\n        color: #adb5bd;\n      }\n    </style>\n    <div id="update"></div>\n    <div id="head_md" style="display:none; padding: 20px 20px;"></div>\n    <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">\n      <div class="d-flex align-items-center justify-content-between">\n        <div class="form-check mr-3">\n          <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">\n          <label class="form-check-label" for="select-all-checkboxes">Selecionar todos</label>\n        </div>\n        <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Baixar</button>\n      </div>\n    </div>\n    <div class="path-navigation-container">\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb" id="folderne" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">\n          <li class="breadcrumb-item">\n            <a href="/">\n              <i class="bi bi-house-door me-1"></i>\n              <span>Início</span>\n            </a>\n          </li>`
      , i = window.location.pathname.trim("/").split("/")
      , o = "/";
    if (i.length > 1)
        for (var l in i) {
            var r = i[l]
              , s = decodeURIComponent(r).replace(/\//g, "%2F").replace(/\?.+/g, "$'")
              , d = s.length > 30 ? s.slice(0, 25) + "..." : s;
            if (o += r + "/",
            "" === d)
                break;
            a += `<li class="breadcrumb-item"><a href="${o}">${d}</a></li>`
        }
    a += `</ol>\n    </nav>\n  </div>\n  <div id="list" class="list-group text-break"></div>\n  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n</div>`,
    $("#content").html(a);
    var c = localStorage.getItem("password" + e);
    function p(e, a, i) {
        console.log(e, a, i),
        $("#list").data("nextPageToken", e.nextPageToken).data("curPageIndex", e.curPageIndex),
        $("#spinner").remove(),
        null === e.nextPageToken ? ($(window).off("scroll"),
        window.scroll_status.event_bound = !1,
        window.scroll_status.loading_lock = !1,
        n ? append_files_to_fallback_list(a, e.data.files) : append_files_to_list(a, e.data.files)) : (console.log("doing something..."),
        n ? append_files_to_fallback_list(a, e.data.files) : append_files_to_list(a, e.data.files),
        !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function() {
            var e = $(this).scrollTop()
              , o = getDocumentHeight();
            if (e + $(this).height() > o - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock)
                    return;
                window.scroll_status.loading_lock = !0,
                $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let e = $("#list");
                n ? (console.log("fallback inside handleSuccessResult"),
                requestListPath(a, {
                    id: t,
                    password: i.password,
                    page_token: e.data("nextPageToken"),
                    page_index: e.data("curPageIndex") + 1
                }, p, null, 5, t, n = !0)) : requestListPath(a, {
                    password: i.password,
                    page_token: e.data("nextPageToken"),
                    page_index: e.data("curPageIndex") + 1
                }, p, null)
            }
        }
        )),
        window.scroll_status.event_bound = !0)),
        !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }
    $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    n ? (console.log("fallback inside list"),
    requestListPath(e, {
        id: t,
        password: c
    }, p, null, null, n = !0)) : (console.log("handling this"),
    requestListPath(e, {
        password: c
    }, p, null));
    document.getElementById("handle-multiple-items-copy").addEventListener("click", (() => {
        const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        // Filtrar o checkbox "Selecionar todos" e apenas checkboxes com value válido
        const e = Array.from(allChecked).filter(checkbox => {
            return checkbox.id !== 'select-all-checkboxes' && checkbox.value && checkbox.value.trim() !== '';
        });
        
        const t = [];
        if (0 === e.length)
            return void showErrorModal("Nenhum Item Selecionado", "Por favor, selecione pelo menos um item para baixar.");
        
        e.forEach((e => {
            const n = e.value;
            t.push(n);
        }));
    
        // Use the new bulk download modal
        initiateBulkDownload(t);
    }));
}
function askPassword(e) {
    $("#spinner").remove();
    var t = prompt("Directory encryption, please enter the password", "");
    localStorage.setItem("password" + e, t),
    null != t && "" != t ? list(e) : history.go(-1)
}
function append_files_to_fallback_list(e, t) {
    try {
        var n = $("#list")
          , a = null === n.data("nextPageToken")
          , o = "0" == n.data("curPageIndex");
        html = "";
        let g = [];
        var l = 0
          , r = !1;
        for (i in t) {
            var s = t[i]
              , d = "/fallback?id=" + s.id;
            if (s.modifiedTime = utc2delhi(s.modifiedTime),
            "application/vnd.google-apps.folder" == s.mimeType)
                html += `<a href="${d}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${s.name} ${UI.display_time ? '<span class="badge bg-info float-end"> ' + s.modifiedTime + " </span>" : ""}</a>`;
            else {
                l = l + Number(s.size);
                s.size = formatFileSize(s.size);
                r = !0;
                var c = s.name
                  , p = UI.second_domain_for_dl ? UI.downloaddomain + s.link : 
                        (s.link.startsWith('http') ? s.link : window.location.origin + s.link);
                c.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
                a && renderReadmeFile(s.id, s.name, s.mimeType),
                "HEAD.md" == s.name && UI.render_head_md && get_file(d, s, (function(e) {
                    markdown("#head_md", e),
                    $("img").addClass("img-fluid")
                }
                ));
                var m = s.fileExtension;
                "?a=view",
                " view",
                html += '<div class="list-group-item list-group-item-action">' + (UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + p + '" id="flexCheckDefault">' : ""),
                "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${m}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${m}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${m}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${m}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${m}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${m}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${m}|`) >= 0 ? html += pdf_icon : html += file_icon,
                html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${d}&a=view">${s.name}</a>${UI.display_download ? `<a href="#" onclick="initiateDownload('${s.name}', '${p}', '${s.size}'); return false;"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}${UI.display_size ? '<span class="badge bg-primary float-end"> ' + s.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end"> ' + s.modifiedTime + " </span>" : ""}</div>`
            }
        }
        if (r && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
        g.length > 0) {
            let t = localStorage.getItem(e)
              , n = g;
            if (!o && t) {
                let e;
                try {
                    e = JSON.parse(t),
                    Array.isArray(e) || (e = [])
                } catch (t) {
                    e = []
                }
                n = e.concat(g)
            }
            localStorage.setItem(e, JSON.stringify(n))
        }
        n.html(("0" == n.data("curPageIndex") ? "" : n.html()) + html),
        a && (total_size = formatFileSize(l) || "0 Bytes",
        total_items = n.find(".countitems").length,
        total_files = n.find(".size_items").length,
        0 == total_items ? $("#count").removeClass("d-none").find(".number").text("Pasta vazia.") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " itens"),
        0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Zero arquivos") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivo com tamanho " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivos com tamanho " + total_size))
    } catch (e) {
        console.log(e)
    }
}
// Função para ordenar itens por data e nome
function sortItems(items, sortBy = 'name', sortOrder = 'asc') {
    return items.sort((a, b) => {
        let comparison = 0;
        
        if (sortBy === 'date') {
            // Função para converter data DD-MM-YYYY HH:mm:ss para Date
            function parseDate(dateString) {
                // Se já está em formato ISO, usar diretamente
                if (dateString.includes('T') || dateString.includes('Z')) {
                    return new Date(dateString);
                }
                
                // Converter formato DD-MM-YYYY HH:mm:ss para YYYY-MM-DD HH:mm:ss
                const match = dateString.match(/(\d{2})-(\d{2})-(\d{4})\s+(\d{2}):(\d{2}):(\d{2})/);
                if (match) {
                    const [, day, month, year, hour, minute, second] = match;
                    return new Date(year, month - 1, day, hour, minute, second);
                }
                
                // Fallback para new Date() normal
                return new Date(dateString);
            }
            
            // Ordenar por data de modificação
            const dateA = parseDate(a.modifiedTime);
            const dateB = parseDate(b.modifiedTime);
            
            comparison = dateA - dateB;
        } else if (sortBy === 'name') {
            // Ordenar por nome (case insensitive)
            comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
        } else if (sortBy === 'size') {
            // Ordenar por tamanho (apenas arquivos)
            const sizeA = a.size ? parseInt(a.size) : 0;
            const sizeB = b.size ? parseInt(b.size) : 0;
            comparison = sizeA - sizeB;
        } else if (sortBy === 'type') {
            // Ordenar por tipo (pastas primeiro, depois arquivos)
            const typeA = a.mimeType === 'application/vnd.google-apps.folder' ? 0 : 1;
            const typeB = b.mimeType === 'application/vnd.google-apps.folder' ? 0 : 1;
            comparison = typeA - typeB;
            
            // Se o tipo for igual, ordenar por nome
            if (comparison === 0) {
                comparison = a.name.toLowerCase().localeCompare(b.name.toLowerCase());
            }
        }
        
        return sortOrder === 'desc' ? -comparison : comparison;
    });
}

// Função para criar controles de ordenação e filtro
function createSortControls() {
    return `
    <div id="sortControls" class="mb-3">
        <div class="row g-2">
            <div class="col-md-6">
                <div class="d-flex align-items-center">
                    <label for="searchInput" class="form-label me-2 mb-0">Buscar:</label>
                    <input type="text" id="searchInput" class="form-control form-control-sm" placeholder="Digite o nome da pasta/arquivo..." style="max-width: 250px;">
                    <button id="refreshBtn" class="btn btn-outline-secondary btn-sm ms-2" onclick="window.location.reload()" title="Atualizar página">
                        <i class="bi bi-arrow-clockwise"></i>
                    </button>
                </div>
            </div>
            <div class="col-md-6">
                <div class="d-flex align-items-center justify-content-end">
                    <label for="sortSelect" class="form-label me-2 mb-0">Ordenar por:</label>
                    <select id="sortSelect" class="form-select form-select-sm" style="width: auto;">
                        <option value="name-asc">Nome (A-Z)</option>
                        <option value="name-desc">Nome (Z-A)</option>
                        <option value="date-desc">Data (Mais recente)</option>
                        <option value="date-asc">Data (Mais antiga)</option>
                        <option value="type-asc">Tipo (Pastas primeiro)</option>
                        <option value="size-desc">Tamanho (Maior)</option>
                        <option value="size-asc">Tamanho (Menor)</option>
                    </select>
                </div>
            </div>
        </div>
    </div>
    `;
}

// Função para aplicar ordenação e filtro
function applySortingAndFilter(currentPath, sortBy, sortOrder, searchTerm = '') {
    const listElement = $("#list");
    
    // Coletar todos os itens do DOM atual (sem regenerar HTML)
    const allItems = [];
    listElement.find('.countitems, .size_items').each(function() {
        const item = $(this);
        const isFolder = !item.hasClass('size_items'); // Pastas têm .countitems mas não .size_items
        const isFile = item.hasClass('size_items');
        
        // Extrair nome corretamente, removendo elementos filhos
        let name = item.clone().children().remove().end().text().trim();
        // Se não conseguir, tenta pegar o texto completo e limpar
        if (!name || name === '') {
            name = item.text().trim();
        }
        // Remover emojis e espaços extras
        name = name.replace(/📁\s*/, '').replace(/📄\s*/, '').replace(/📊\s*/, '').replace(/🎵\s*/, '').replace(/🎬\s*/, '').replace(/🖼️\s*/, '').replace(/📋\s*/, '').replace(/📦\s*/, '').replace(/📝\s*/, '').replace(/📄\s*/, '');
        // Remover badges de data (podem estar no final)
        name = name.replace(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/g, '').trim();
        name = name.replace(/\s+/g, ' ').trim();
        
        // Para arquivos, o elemento DOM a mover é o div pai, não o <a>
        let elementToMove = item[0];
        if (isFile) {
            const parentDiv = item.closest('.list-group-item');
            if (parentDiv.length) {
                elementToMove = parentDiv[0];
            }
        }
        
        // Extrair data do badge se existir
        // Para arquivos, procurar no div pai
        const container = isFile ? item.closest('.list-group-item') : item;
        const badge = container.find('.badge');
        let modifiedTime = new Date().toISOString();
        if (badge.length) {
            const dateText = badge.text().trim();
            // Converter data do formato brasileiro para ISO
            try {
                // Formato: DD-MM-YYYY HH:mm:ss
                const dateMatch = dateText.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
                if (dateMatch) {
                    const [, day, month, year, hour, minute, second] = dateMatch;
                    modifiedTime = new Date(year, month - 1, day, hour, minute, second).toISOString();
                } else {
                    // Tentar formato simples DD/MM/YYYY
                    const simpleDateMatch = dateText.match(/(\d{2})\/(\d{2})\/(\d{4})/);
                    if (simpleDateMatch) {
                        const [, day, month, year] = simpleDateMatch;
                        modifiedTime = new Date(year, month - 1, day).toISOString();
                    }
                }
            } catch (e) {
                console.log('Erro ao converter data:', dateText, e);
            }
        }
        
        // Extrair tamanho se for arquivo
        // Para arquivos, procurar no div pai
        const sizeText = container.find('.badge.bg-primary').text().trim();
        const size = sizeText ? parseInt(sizeText.replace(/[^\d]/g, '')) || 0 : 0;
        
        allItems.push({
            name: name,
            modifiedTime: modifiedTime,
            size: size,
            mimeType: isFolder ? 'application/vnd.google-apps.folder' : 'file',
            element: elementToMove // Manter referência ao elemento DOM correto
        });
    });
    
    // Aplicar filtro de busca se fornecido
    let filteredItems = allItems;
    
    if (searchTerm && searchTerm.trim() !== '') {
        const searchLower = searchTerm.toLowerCase().trim();
        filteredItems = allItems.filter(item => 
            item.name.toLowerCase().includes(searchLower)
        );
    } else {
        // Se não há termo de busca, mostrar todos os itens
        filteredItems = allItems;
    }
    
    // Ordenar os itens
    console.log('Itens antes da ordenação:', filteredItems.slice(0, 3).map(item => ({
        name: item.name,
        modifiedTime: item.modifiedTime,
        date: new Date(item.modifiedTime)
    })));
    const sortedItems = sortItems(filteredItems, sortBy, sortOrder);
    console.log('Itens após ordenação:', sortedItems.slice(0, 3).map(item => ({
        name: item.name,
        modifiedTime: item.modifiedTime,
        date: new Date(item.modifiedTime)
    })));
    
    // Reordenar os elementos no DOM sem regenerar HTML
    listElement.empty();
    sortedItems.forEach(item => {
        listElement.append(item.element);
    });
    
    // Salvar preferências
    localStorage.setItem('sortPreference', JSON.stringify({ sortBy, sortOrder }));
    localStorage.setItem('searchTerm', searchTerm);
    
    // Mostrar feedback visual
    const searchInput = document.getElementById('searchInput');
    if (searchInput) {
        searchInput.value = searchTerm;
    }
}

// Função para aplicar filtro dinâmico
function applyDynamicFilter(searchTerm = '') {
    const listElement = $("#list");
    
    // Método simples e direto: trabalhar diretamente com os elementos DOM
    const allItems = [];
    listElement.find('.countitems, .size_items').each(function() {
        const item = $(this);
        let name = '';
        let elementToHide = null;
        
        // Se é arquivo (.size_items), o elemento está dentro de um div
        if (item.hasClass('size_items')) {
            // Extrair o nome diretamente do texto do elemento <a>
            // O nome está no conteúdo direto do elemento, sem filhos
            name = item.clone().children().remove().end().text().trim();
            // Se não conseguir, tenta pegar o texto completo e limpar
            if (!name || name === '') {
                name = item.text().trim();
            }
            // Remover emojis e espaços extras (caso algum tenha sido capturado)
            name = name.replace(/📁\s*/, '').replace(/📄\s*/, '').replace(/📊\s*/, '').replace(/🎵\s*/, '').replace(/🎬\s*/, '').replace(/🖼️\s*/, '').replace(/📋\s*/, '').replace(/📦\s*/, '').replace(/📝\s*/, '').replace(/📄\s*/, '');
            // O elemento a esconder/mostrar é o div pai (para manter toda a estrutura)
            elementToHide = item.closest('.list-group-item')[0] || item[0];
        } else {
            // Se é pasta (.countitems), o elemento já é o próprio link
            // Extrair nome, removendo ícones e badges
            name = item.clone().children().remove().end().text().trim();
            // Se não conseguir, tenta pegar o texto completo e limpar
            if (!name || name === '') {
                name = item.text().trim();
            }
            // Remover emojis e espaços extras
            name = name.replace(/📁\s*/, '').replace(/📄\s*/, '').replace(/📊\s*/, '').replace(/🎵\s*/, '').replace(/🎬\s*/, '').replace(/🖼️\s*/, '').replace(/📋\s*/, '').replace(/📦\s*/, '').replace(/📝\s*/, '').replace(/📄\s*/, '');
            // Remover badges de data (podem estar no final)
            name = name.replace(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/g, '').trim();
            // Remover qualquer badge ou span restante
            name = name.replace(/\s+/g, ' ').trim();
            elementToHide = item[0];
        }
        
        allItems.push({
            name: name,
            element: elementToHide || item[0],
            isFile: item.hasClass('size_items')
        });
    });
    
    // Aplicar filtro
    if (searchTerm && searchTerm.trim() !== '') {
        const searchLower = searchTerm.toLowerCase().trim();
        allItems.forEach(item => {
            const matches = item.name.toLowerCase().includes(searchLower);
            if (matches) {
                $(item.element).show();
            } else {
                $(item.element).hide();
            }
        });
    } else {
        // Mostrar todos os itens
        allItems.forEach(item => {
            $(item.element).show();
        });
    }
    
    // Salvar termo de busca
    localStorage.setItem('searchTerm', searchTerm);
}

// Função para aplicar ordenação
function applySorting(sortBy, sortOrder) {
    const listElement = $("#list");
    
    // Usar dados originais se disponíveis para ordenação mais precisa
    if (window.currentItems && window.currentItems.length > 0) {
        // Criar array de itens com dados originais e elementos DOM
        const allItems = [];
        
        // Primeiro, coletar todos os elementos DOM visíveis
        listElement.find('.countitems:visible, .size_items:visible').each(function() {
            const item = $(this);
            const isFolder = !item.hasClass('size_items');
            const isFile = item.hasClass('size_items');
            
            // Extrair nome corretamente, removendo elementos filhos
            let name = item.clone().children().remove().end().text().trim();
            // Se não conseguir, tenta pegar o texto completo e limpar
            if (!name || name === '') {
                name = item.text().trim();
            }
            // Remover emojis e espaços extras
            name = name.replace(/📁\s*/, '').replace(/📄\s*/, '').replace(/📊\s*/, '').replace(/🎵\s*/, '').replace(/🎬\s*/, '').replace(/🖼️\s*/, '').replace(/📋\s*/, '').replace(/📦\s*/, '').replace(/📝\s*/, '').replace(/📄\s*/, '');
            // Remover badges de data (podem estar no final)
            name = name.replace(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/g, '').trim();
            name = name.replace(/\s+/g, ' ').trim();
            
            // Determinar o elemento correto para mover
            let elementToMove = item[0];
            if (isFile) {
                // Para arquivos, mover o div pai que contém toda a estrutura
                const parentDiv = item.closest('.list-group-item');
                if (parentDiv.length) {
                    elementToMove = parentDiv[0];
                }
            }
            
            // Encontrar dados originais correspondentes
            const originalData = window.currentItems.find(orig => orig.name === name);
            
            if (originalData) {
                // Usar dados originais da API
                const itemData = {
                    name: originalData.name,
                    modifiedTime: originalData.modifiedTime,
                    size: originalData.size ? parseInt(originalData.size) : 0,
                    mimeType: originalData.mimeType,
                    element: elementToMove
                };
                
                
                allItems.push(itemData);
            } else {
                // Fallback: extrair do DOM se não encontrar dados originais
                // Para arquivos, procurar badges no div pai
                const container = isFile ? item.closest('.list-group-item') : item;
                const badge = container.find('.badge.bg-info');
                let modifiedTime = new Date().toISOString();
                if (badge.length) {
                    const dateText = badge.text().trim();
                    try {
                        const dateMatch = dateText.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
                        if (dateMatch) {
                            const [, day, month, year, hour, minute, second] = dateMatch;
                            modifiedTime = new Date(year, month - 1, day, hour, minute, second).toISOString();
                        }
                    } catch (e) {
                        console.log('Erro ao converter data:', dateText, e);
                    }
                }
                
                // Para arquivos, procurar tamanho no badge correto do div pai
                const sizeText = container.find('.badge.bg-primary').text().trim();
                const size = sizeText ? parseInt(sizeText.replace(/[^\d]/g, '')) || 0 : 0;
                
                const fallbackData = {
                    name: name,
                    modifiedTime: modifiedTime,
                    size: size,
                    mimeType: isFolder ? 'application/vnd.google-apps.folder' : 'file',
                    element: elementToMove
                };
                
                
                allItems.push(fallbackData);
            }
        });
        
        // Ordenar os itens
        const sortedItems = sortItems(allItems, sortBy, sortOrder);
        
        // Reordenar no DOM (elementos já são os corretos)
        listElement.empty();
        sortedItems.forEach(item => {
            listElement.append(item.element);
        });
    } else {
        // Fallback: método antigo se não houver dados originais
        const allItems = [];
        listElement.find('.countitems:visible, .size_items:visible').each(function() {
            const item = $(this);
            const isFolder = !item.hasClass('size_items');
            const isFile = item.hasClass('size_items');
            
            // Extrair nome corretamente, removendo elementos filhos
            let name = item.clone().children().remove().end().text().trim();
            // Se não conseguir, tenta pegar o texto completo e limpar
            if (!name || name === '') {
                name = item.text().trim();
            }
            // Remover emojis e espaços extras
            name = name.replace(/📁\s*/, '').replace(/📄\s*/, '').replace(/📊\s*/, '').replace(/🎵\s*/, '').replace(/🎬\s*/, '').replace(/🖼️\s*/, '').replace(/📋\s*/, '').replace(/📦\s*/, '').replace(/📝\s*/, '').replace(/📄\s*/, '');
            // Remover badges de data (podem estar no final)
            name = name.replace(/\d{2}-\d{2}-\d{4} \d{2}:\d{2}:\d{2}/g, '').trim();
            name = name.replace(/\s+/g, ' ').trim();
            
            // Determinar o elemento correto para mover
            let elementToMove = item[0];
            if (isFile) {
                // Para arquivos, mover o div pai que contém toda a estrutura
                const parentDiv = item.closest('.list-group-item');
                if (parentDiv.length) {
                    elementToMove = parentDiv[0];
                }
            }
            
            // Para arquivos, procurar badges no div pai
            const container = isFile ? item.closest('.list-group-item') : item;
            const badge = container.find('.badge.bg-info');
            let modifiedTime = new Date().toISOString();
            if (badge.length) {
                const dateText = badge.text().trim();
                try {
                    const dateMatch = dateText.match(/(\d{2})-(\d{2})-(\d{4}) (\d{2}):(\d{2}):(\d{2})/);
                    if (dateMatch) {
                        const [, day, month, year, hour, minute, second] = dateMatch;
                        modifiedTime = new Date(year, month - 1, day, hour, minute, second).toISOString();
                    }
                } catch (e) {
                    console.log('Erro ao converter data:', dateText, e);
                }
            }
            
            // Para arquivos, procurar tamanho no badge correto do div pai
            const sizeText = container.find('.badge.bg-primary').text().trim();
            const size = sizeText ? parseInt(sizeText.replace(/[^\d]/g, '')) || 0 : 0;
            
            allItems.push({
                name: name,
                modifiedTime: modifiedTime,
                size: size,
                mimeType: isFolder ? 'application/vnd.google-apps.folder' : 'file',
                element: elementToMove
            });
        });
        
        const sortedItems = sortItems(allItems, sortBy, sortOrder);
        listElement.empty();
        sortedItems.forEach(item => {
            listElement.append(item.element);
        });
    }
    
    // Salvar preferência
    localStorage.setItem('sortPreference', JSON.stringify({ sortBy, sortOrder }));
}

// Função para gerenciar histórico de pastas
function addToHistory(path, folderName) {
    const history = getHistory();
    const newEntry = {
        path: path,
        name: folderName,
        timestamp: new Date().toISOString(),
        displayTime: new Date().toLocaleString('pt-BR')
    };
    
    // Remover entrada existente se já existir
    const existingIndex = history.findIndex(item => item.path === path);
    if (existingIndex !== -1) {
        history.splice(existingIndex, 1);
    }
    
    // Adicionar no início da lista
    history.unshift(newEntry);
    
    // Manter apenas os últimos 20 itens
    if (history.length > 20) {
        history.splice(20);
    }
    
    // Salvar no localStorage
    localStorage.setItem('folderHistory', JSON.stringify(history));
    
    // Atualizar o histórico na UI
    updateHistoryDisplay();
}

function getHistory() {
    try {
        const history = localStorage.getItem('folderHistory');
        return history ? JSON.parse(history) : [];
    } catch (e) {
        console.log('Erro ao carregar histórico:', e);
        return [];
    }
}

function clearHistory() {
    localStorage.removeItem('folderHistory');
    updateHistoryDisplay();
}

function updateHistoryDisplay() {
    const history = getHistory();
    const historyContainer = document.getElementById('historyContainer');
    
    if (!historyContainer) return;
    
    if (history.length === 0) {
        historyContainer.innerHTML = `
            <div class="text-muted text-center py-3">
                <i class="bi bi-clock-history"></i><br>
                Nenhuma pasta visitada recentemente
            </div>
        `;
        return;
    }
    
    let html = '';
    history.forEach((item, index) => {
        const shortName = item.name.length > 25 ? item.name.substring(0, 25) + '...' : item.name;
        const isCurrentPath = window.location.pathname === item.path;
        const currentClass = isCurrentPath ? 'bg-primary text-white' : '';
        
        html += `
            <div class="history-item d-flex align-items-center p-2 border-bottom ${currentClass}" style="cursor: pointer; transition: background-color 0.2s;" 
                 onmouseover="this.style.backgroundColor='${isCurrentPath ? '#0056b3' : '#f8f9fa'}'" 
                 onmouseout="this.style.backgroundColor='${isCurrentPath ? '#0056b3' : 'transparent'}'"
                 onclick="navigateToPath('${item.path}')">
                <div class="flex-grow-1">
                    <div class="fw-bold text-truncate" title="${item.name}">
                        ${isCurrentPath ? '<i class="bi bi-arrow-right-circle me-1"></i>' : ''}${shortName}
                    </div>
                    <small class="${isCurrentPath ? 'text-light' : 'text-muted'}">${item.displayTime}</small>
                </div>
                <button class="btn btn-sm ${isCurrentPath ? 'btn-outline-light' : 'btn-outline-danger'} ms-2" onclick="event.stopPropagation(); removeFromHistory('${item.path}')" title="Remover">
                    <i class="bi bi-x"></i>
                </button>
            </div>
        `;
    });
    
    historyContainer.innerHTML = html;
}

function removeFromHistory(path) {
    const history = getHistory();
    const filteredHistory = history.filter(item => item.path !== path);
    localStorage.setItem('folderHistory', JSON.stringify(filteredHistory));
    updateHistoryDisplay();
}

function navigateToPath(path) {
    window.location.href = path;
}

// Função para criar o painel de histórico
function createHistoryPanel() {
    return `
    <div id="historyPanel" class="position-fixed" style="bottom: 80px; right: 20px; z-index: 1050; width: 320px; max-height: 60vh; overflow-y: auto;">
        <div class="card shadow-lg border-0">
            <div class="card-header bg-primary text-white d-flex justify-content-between align-items-center">
                <h6 class="mb-0">
                    <i class="bi bi-clock-history me-2"></i>Histórico
                </h6>
                <div class="btn-group btn-group-sm">
                    <button class="btn btn-outline-light btn-sm" onclick="toggleHistoryPanel()" title="Minimizar">
                        <i class="bi bi-dash"></i>
                    </button>
                    <button class="btn btn-outline-light btn-sm" onclick="clearHistory()" title="Limpar histórico">
                        <i class="bi bi-trash"></i>
                    </button>
                </div>
            </div>
            <div class="card-body p-0" style="max-height: 350px; overflow-y: auto;">
                <div id="historyContainer">
                    <div class="text-muted text-center py-3">
                        <i class="bi bi-clock-history"></i><br>
                        Carregando histórico...
                    </div>
                </div>
            </div>
        </div>
    </div>
    <style>
        /* Estilos para o histórico */
        #historyPanel {
            animation: slideInRight 0.3s ease-out;
        }
        
        @keyframes slideInRight {
            from {
                transform: translateX(100%);
                opacity: 0;
            }
            to {
                transform: translateX(0);
                opacity: 1;
            }
        }
        
        .history-item {
            transition: all 0.2s ease;
        }
        
        .history-item:hover {
            background-color: #f8f9fa !important;
            transform: translateX(2px);
        }
        
        [data-theme="dark"] .history-item:hover {
            background-color: #2d2d2d !important;
        }
        
        [data-theme="dark"] #historyPanel .card {
            background-color: #2d2d2d !important;
            color: #ffffff !important;
        }
        
        [data-theme="dark"] #historyPanel .card-body {
            background-color: #2d2d2d !important;
        }
        
        [data-theme="dark"] .history-item {
            border-bottom-color: #444 !important;
        }
        
        [data-theme="dark"] .history-item .text-muted {
            color: #aaa !important;
        }
        
        /* Responsividade */
        @media (max-width: 768px) {
            #historyPanel {
                width: 280px !important;
                right: 10px !important;
                bottom: 70px !important;
            }
            
            /* Estilos do botão de histórico removidos - agora está no menu de funcionalidades */
        }
    </style>
    `;
}

// Função createHistoryButton removida - histórico agora está no menu de funcionalidades

// Função para criar o botão de configurações
function createSettingsButton() {
    return `
    <div class="position-fixed" style="bottom: 20px; right: 20px; z-index: 1050;">
        <div class="dropdown">
            <button class="btn btn-secondary" type="button" id="settingsDropdown" 
                    data-bs-toggle="dropdown" aria-expanded="false" 
                    style="width: 40px; height: 40px; border-radius: 50%; box-shadow: 0 3px 10px rgba(0,0,0,0.15); font-size: 0.9rem;"
                    title="Funcionalidades">
                <i class="bi bi-grid-3x3-gap-fill"></i>
            </button>
            <ul class="dropdown-menu dropdown-menu-end" aria-labelledby="settingsDropdown" 
                style="min-width: 200px; box-shadow: 0 4px 12px rgba(0,0,0,0.15);">
                <li>
                    <a class="dropdown-item" href="#" onclick="toggleDarkMode()" id="darkModeToggle">
                        <i class="bi bi-moon-fill me-2" id="dark-mode-icon"></i>
                        <span id="darkModeText">Modo Noturno</span>
                    </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                    <a class="dropdown-item" href="#" onclick="toggleReadmeRendering()" id="readmeToggle">
                        <i class="bi bi-file-text me-2" id="readme-icon"></i>
                        <span id="readmeText">Renderizar README</span>
                    </a>
                </li>
                <li>
                    <a class="dropdown-item" href="#" onclick="toggleTxtRendering()" id="txtToggle">
                        <i class="bi bi-file-text me-2" id="txt-icon"></i>
                        <span id="txtText">Renderizar Texto</span>
                    </a>
                </li>
                <li><hr class="dropdown-divider"></li>
                        <li>
                            <a class="dropdown-item" href="#" onclick="showStudiedStats()">
                                <i class="bi bi-graph-up me-2"></i>
                                <span>Progresso de Estudos</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" onclick="showFavorites()">
                                <i class="bi bi-star-fill me-2"></i>
                                <span>Favoritos</span>
                            </a>
                        </li>
                        <li>
                            <a class="dropdown-item" href="#" onclick="showHistory()">
                                <i class="bi bi-clock-history me-2"></i>
                                <span>Histórico</span>
                            </a>
                        </li>
                <li><hr class="dropdown-divider"></li>
                <li>
                    <a class="dropdown-item" href="https://portal.nuvem.me">
                        <i class="bi bi-house me-2"></i>
                        <span>Portal Nuvem</span>
                    </a>
                </li>
            </ul>
        </div>
    </div>
    `;
}

// Função toggleHistoryPanel removida - histórico agora está no menu de funcionalidades

// Função para alternar renderização de README
function toggleReadmeRendering() {
    const currentSetting = localStorage.getItem('renderReadme') === 'true';
    const newSetting = !currentSetting;
    
    localStorage.setItem('renderReadme', newSetting.toString());
    
    // Atualizar ícone e texto
    const icon = document.getElementById('readme-icon');
    const text = document.getElementById('readmeText');
    
    if (newSetting) {
        icon.className = 'bi bi-file-text-fill me-2';
        text.textContent = 'Ocultar README';
    } else {
        icon.className = 'bi bi-file-text me-2';
        text.textContent = 'Renderizar README';
    }
    
    // Recarregar a página atual para aplicar a mudança
    window.location.reload();
}

function toggleTxtRendering() {
    const currentSetting = localStorage.getItem('renderTxt') === 'true';
    const newSetting = !currentSetting;
    
    localStorage.setItem('renderTxt', newSetting.toString());
    
    // Atualizar ícone e texto
    const icon = document.getElementById('txt-icon');
    const text = document.getElementById('txtText');
    
    if (newSetting) {
        icon.className = 'bi bi-file-text-fill me-2';
        text.textContent = 'Ocultar Texto';
    } else {
        icon.className = 'bi bi-file-text me-2';
        text.textContent = 'Renderizar Texto';
    }
    
    // Recarregar a página atual para aplicar a mudança
    window.location.reload();
}

// Função para inicializar configurações
function initializeSettings() {
    // Inicializar modo noturno
    const savedTheme = localStorage.getItem('theme') || 'light';
    const darkModeIcon = document.getElementById('dark-mode-icon');
    const darkModeText = document.getElementById('darkModeText');
    
    if (savedTheme === 'dark') {
        if (darkModeIcon) darkModeIcon.className = 'bi bi-sun-fill me-2';
        if (darkModeText) darkModeText.textContent = 'Modo Claro';
    } else {
        if (darkModeIcon) darkModeIcon.className = 'bi bi-moon-fill me-2';
        if (darkModeText) darkModeText.textContent = 'Modo Noturno';
    }
    
    // Inicializar renderização de README
    const renderReadme = localStorage.getItem('renderReadme') === 'true';
    const readmeIcon = document.getElementById('readme-icon');
    const readmeText = document.getElementById('readmeText');
    
    if (renderReadme) {
        if (readmeIcon) readmeIcon.className = 'bi bi-file-text-fill me-2';
        if (readmeText) readmeText.textContent = 'Ocultar README';
    } else {
        if (readmeIcon) readmeIcon.className = 'bi bi-file-text me-2';
        if (readmeText) readmeText.textContent = 'Renderizar README';
    }
    
    // Inicializar renderização de TXT
    const renderTxt = localStorage.getItem('renderTxt') === 'true';
    const txtIcon = document.getElementById('txt-icon');
    const txtText = document.getElementById('txtText');
    
    if (renderTxt) {
        if (txtIcon) txtIcon.className = 'bi bi-file-text-fill me-2';
        if (txtText) txtText.textContent = 'Ocultar Texto';
    } else {
        if (txtIcon) txtIcon.className = 'bi bi-file-text me-2';
        if (txtText) txtText.textContent = 'Renderizar Texto';
    }
}

function append_files_to_list(e, t) {
    var n = $("#list")
      , a = null === n.data("nextPageToken")
      , o = "0" == n.data("curPageIndex");
    
    // Adicionar controles de ordenação apenas na primeira página
    if (o && !document.getElementById('sortControls')) {
        const sortControls = createSortControls();
        n.before(sortControls);
        
        // Carregar preferência de ordenação salva
        const savedPreference = localStorage.getItem('sortPreference');
        if (savedPreference) {
            try {
                const { sortBy, sortOrder } = JSON.parse(savedPreference);
                document.getElementById('sortSelect').value = `${sortBy}-${sortOrder}`;
            } catch (e) {
                console.log('Erro ao carregar preferência de ordenação:', e);
            }
        }
        
        // Adicionar event listener para mudança no select (aplicar automaticamente)
        document.getElementById('sortSelect').addEventListener('change', function() {
            const sortValue = this.value;
            const [sortBy, sortOrder] = sortValue.split('-');
            applySorting(sortBy, sortOrder);
        });

        // Adicionar event listener para o campo de busca (filtro dinâmico)
        document.getElementById('searchInput').addEventListener('input', function() {
            const searchTerm = this.value;
            applyDynamicFilter(searchTerm);
        });
        
        // Carregar termo de busca salvo
        const savedSearchTerm = localStorage.getItem('searchTerm');
        if (savedSearchTerm) {
            document.getElementById('searchInput').value = savedSearchTerm;
        }
    }
    
    // Botão de histórico removido - agora está no menu de funcionalidades
    
    // Adicionar botão de configurações apenas na primeira página
    if (o && !document.getElementById('settingsDropdown')) {
        const settingsButton = createSettingsButton();
        document.body.insertAdjacentHTML('beforeend', settingsButton);
        
        // Inicializar configurações
        initializeSettings();
    }
    
    // Adicionar nuvens no background se não existirem
    addCloudsBackground();
    
    // Adicionar pasta atual ao histórico (apenas se não for a raiz)
    if (e && e !== '/' && e !== '') {
        const pathSegments = e.split('/').filter(segment => segment);
        const folderName = pathSegments[pathSegments.length - 1] || 'Pasta';
        addToHistory(e, decodeURIComponent(folderName));
    }
    
    html = "";
    let l = [];
    var r = 0
      , s = !1;
    
    // Armazenar dados originais para ordenação
    window.currentItems = [...t];
    
    // Determinar ordenação baseada na preferência salva
    let sortBy = 'type';
    let sortOrder = 'asc';
    
    const savedPreference = localStorage.getItem('sortPreference');
    if (savedPreference) {
        try {
            const { sortBy: savedSortBy, sortOrder: savedSortOrder } = JSON.parse(savedPreference);
            sortBy = savedSortBy;
            sortOrder = savedSortOrder;
        } catch (e) {
            console.log('Erro ao carregar preferência de ordenação:', e);
        }
    }
    
    // Ordenar os itens antes de processar
    const sortedItems = sortItems([...t], sortBy, sortOrder);
    
    for (i in sortedItems) {
        var d = sortedItems[i]
          , c = e + (encodeURIComponent(d.name).replace(/\//g, "%2F") + "/").replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
        if (d.modifiedTime = utc2delhi(d.modifiedTime),
        "application/vnd.google-apps.folder" == d.mimeType) {
            // Verificar se a pasta está no histórico
            const history = getHistory();
            const isInHistory = history.some(item => item.path === c);
            const historyIcon = isInHistory ? '<i class="bi bi-clock-history text-warning me-1" title="Visitada recentemente"></i>' : '';
            
            const studiedStatus = isStudied(d.id) ? 'bi bi-check-circle-fill text-success' : 'bi bi-circle text-muted';
            const studiedTitle = isStudied(d.id) ? 'Marcado como estudado - Clique para desmarcar' : 'Clique para marcar como estudado';
            // Check if folder is favorite
            const favoriteStatus = isFavorite(d.id) ? 'bi-star-fill text-warning' : 'bi-star text-muted';
            const favoriteTitle = isFavorite(d.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
            
            html += `<a href="${c}" style="color: ${UI.folder_text_color};" class="countitems list-group-item list-group-item-action" onclick="addToHistory('${c}', '${d.name.replace(/'/g, "\\'")}')"> ${folder_icon} ${historyIcon}${d.name} <i class="favorite-icon ${favoriteStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${favoriteTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleFavoriteStatus('${d.id}', '${d.name.replace(/'/g, "\\'")}', this.parentElement, '${c}');"></i><i class="studied-icon ${studiedStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${studiedTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleStudiedStatus('${d.id}', '${d.name.replace(/'/g, "\\'")}', this.parentElement, '${c}');"></i> ${UI.display_time ? '<span class="badge bg-info float-end me-2"> ' + d.modifiedTime + " </span>" : ""}</a>`;
        } else {
            r = r + Number(d.size);
            d.size = formatFileSize(d.size);
            s = !0;
            var p = d.name
              , m = UI.second_domain_for_dl ? UI.downloaddomain + d.link : 
                    (d.link.startsWith('http') ? d.link : window.location.origin + d.link)
              , g = e + p.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
            a && renderReadmeFile(d.id, d.name, d.mimeType),
            "HEAD.md" == d.name && UI.render_head_md && get_file(c, d, (function(e) {
                markdown("#head_md", e),
                $("img").addClass("img-fluid")
            }
            ));
            var f = d.fileExtension;
            console.log(f),
            g += "?a=view",
            " view",
            html += '<div class="list-group-item list-group-item-action">' + (UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + m + '" data-name="' + d.name + '" id="flexCheckDefault">' : ""),
            "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${f}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${f}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${f}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${f}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${f}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${f}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${f}|`) >= 0 ? html += pdf_icon : html += file_icon,
            (function() {
                var studiedStatus = isStudied(d.id) ? 'bi bi-check-circle-fill text-success' : 'bi bi-circle text-muted';
                var studiedTitle = isStudied(d.id) ? 'Marcado como estudado - Clique para desmarcar' : 'Clique para marcar como estudado';
                // Check if file is favorite
                const fileFavoriteStatus = isFavorite(d.id) ? 'bi-star-fill text-warning' : 'bi-star text-muted';
                const fileFavoriteTitle = isFavorite(d.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
                
                html += ` <a class="countitems size_items list-group-item-action" style="text-decoration: none; color: ${UI.css_a_tag_color};" href="${g}">${d.name}</a><i class="favorite-icon ${fileFavoriteStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${fileFavoriteTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleFavoriteStatus('${d.id}', '${d.name.replace(/'/g, "\\'")}', this.parentElement, '${g}');"></i><i class="studied-icon ${studiedStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${studiedTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleStudiedStatus('${d.id}', '${d.name.replace(/'/g, "\\'")}', this.parentElement, '${g}');"></i>${UI.display_download ? `<a href="#" onclick="initiateDownload('${d.name}', '${m}', '${d.size}'); return false;"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}${UI.display_size ? '<span class="badge bg-primary float-end me-2"> ' + d.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end me-2"> ' + d.modifiedTime + " </span>" : ""}</div>`;
            })()
        }
    }
    if (s && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
    l.length > 0) {
        let t = localStorage.getItem(e)
          , n = l;
        if (!o && t) {
            let e;
            try {
                e = JSON.parse(t),
                Array.isArray(e) || (e = [])
            } catch (t) {
                e = []
            }
            n = e.concat(l)
        }
        localStorage.setItem(e, JSON.stringify(n))
    }
    
    // Se não é a primeira página, aplicar ordenação a todos os itens
    if ("0" != n.data("curPageIndex")) {
        // Para paginação, usar uma abordagem mais simples: apenas anexar e reordenar
        n.html(n.html() + html);
        
        // Aplicar ordenação a todos os itens visíveis
        applySorting(sortBy, sortOrder);
    } else {
        n.html(html);
    }
    
    a && (total_size = formatFileSize(r) || "0 Bytes",
    total_items = n.find(".countitems").length,
    total_files = n.find(".size_items").length,
    0 == total_items ? $("#count").removeClass("d-none").find(".number").text("Pasta vazia.") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " itens"),
    0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Zero arquivos") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivo com o tamanho " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivos com tamanho " + total_size))
}
function render_search_result_list() {
    var e = `\n  <div class="container"><br>\n  <div id="update"></div>\n  <div class="container" id="select_items" style="padding: 0px 50px 10px; display:none;">\n  <div class="d-flex align-items-center justify-content-between">\n    <div class="form-check mr-3">\n      <input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" id="select-all-checkboxes">\n      <label class="form-check-label" for="select-all-checkboxes">Selecionar todos</label>\n    </div>\n    <button id="handle-multiple-items-copy" style="padding: 5px 10px; font-size: 12px;" class="btn btn-success">Baixar</button>\n  </div>\n  </div>\n  <div class="card">\n  <div class="${UI.path_nav_alert_class} d-flex align-items-center" role="alert" style="margin-bottom: 0;">Resultados da Busca</div>\n  <div id="list" class="list-group text-break">\n  </div>\n  </div>\n  <div class="${UI.file_count_alert_class} text-center d-none" role="alert" id="count"><span class="number text-center"></span> | <span class="totalsize text-center"></span></div>\n  <div id="readme_md" style="display:none; padding: 20px 20px;"></div>\n  </div>\n  `;
    $("#content").html(e),
    $("#list").html(`<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    $("#readme_md").hide().html(""),
    $("#head_md").hide().html(""),
    requestSearch({
        q: window.MODEL.q
    }, (function e(t, n) {
        $("#list").data("nextPageToken", t.nextPageToken).data("curPageIndex", t.curPageIndex),
        $("#spinner").remove(),
        null === t.nextPageToken ? ($(window).off("scroll"),
        window.scroll_status.event_bound = !1,
        window.scroll_status.loading_lock = !1,
        append_search_result_to_list(t.data.files)) : (append_search_result_to_list(t.data.files),
        !0 !== window.scroll_status.event_bound && ($(window).on("scroll", (function() {
            var t = $(this).scrollTop()
              , n = getDocumentHeight();
            if (t + $(this).height() > n - (Os.isMobile ? 130 : 80)) {
                if (!0 === window.scroll_status.loading_lock)
                    return;
                window.scroll_status.loading_lock = !0,
                $(`<div id="spinner" class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`).insertBefore("#readme_md");
                let t = $("#list");
                requestSearch({
                    q: window.MODEL.q,
                    page_token: t.data("nextPageToken"),
                    page_index: t.data("curPageIndex") + 1
                }, e)
            }
        }
        )),
        window.scroll_status.event_bound = !0)),
        !0 === window.scroll_status.loading_lock && (window.scroll_status.loading_lock = !1)
    }
    ));
    document.getElementById("handle-multiple-items-copy").addEventListener("click", (() => {
        const allChecked = document.querySelectorAll('input[type="checkbox"]:checked');
        // Filtrar o checkbox "Selecionar todos" e apenas checkboxes com value válido
        const e = Array.from(allChecked).filter(checkbox => {
            return checkbox.id !== 'select-all-checkboxes' && checkbox.value && checkbox.value.trim() !== '';
        });
        
        const t = [];
        if (0 === e.length)
            return void showErrorModal("Nenhum Item Selecionado", "Por favor, selecione pelo menos um item para baixar.");
        
        e.forEach((e => {
            const n = e.value;
            t.push(n);
        }));
    
        // Use the new bulk download modal
        initiateBulkDownload(t);
    }));
}
function append_search_result_to_list(e) {
    try {
        window.current_drive_order;
        var t = $("#list")
          , n = null === t.data("nextPageToken");
        html = "";
        var a = 0
          , o = !1;
        for (i in e) {
            var l = e[i];
            if (null == l.size && (l.size = ""),
            l.modifiedTime = utc2delhi(l.modifiedTime),
            "application/vnd.google-apps.folder" == l.mimeType) {
                var studiedStatus = isStudied(l.id) ? 'bi bi-check-circle-fill text-success' : 'bi bi-circle text-muted';
                var studiedTitle = isStudied(l.id) ? 'Marcado como estudado - Clique para desmarcar' : 'Clique para marcar como estudado';
                // Check if folder is favorite
                const searchFavoriteStatus = isFavorite(l.id) ? 'bi-star-fill text-warning' : 'bi-star text-muted';
                const searchFavoriteTitle = isFavorite(l.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
                
                html += `<a style="color: ${UI.folder_text_color};" onclick="onSearchResultItemClick('${l.id}', false)" data-bs-toggle="modal" data-bs-target="#SearchModel" class="countitems list-group-item list-group-item-action"> ${folder_icon} ${l.name} <i class="favorite-icon ${searchFavoriteStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${searchFavoriteTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleFavoriteStatus('${l.id}', '${l.name.replace(/'/g, "\\'")}', this.parentElement);"></i><i class="studied-icon ${studiedStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${studiedTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleStudiedStatus('${l.id}', '${l.name.replace(/'/g, "\\'")}', this.parentElement);"></i> ${UI.display_time ? '<span class="badge bg-info float-end me-2"> ' + l.modifiedTime + " </span>" : ""}</a>`;
            }
            else {
                o = !0,
                a = a + Number(l.size);
                l.size = formatFileSize(l.size);
                var r = l.fileExtension
                  , s = UI.second_domain_for_dl ? UI.downloaddomain + l.link : 
                        (l.link.startsWith('http') ? l.link : window.location.origin + l.link);
                html += `<div style="color: ${UI.css_a_tag_color};" gd-type="$item['mimeType']}" class="countitems size_items list-group-item list-group-item-action">${UI.allow_selecting_files ? '<input class="form-check-input" style="margin-top: 0.3em;margin-right: 0.5em;" type="checkbox" value="' + s + '" data-name="' + l.name + '" id="flexCheckDefault">' : ""}`,
                "|mp4|webm|avi|mpg|mpeg|mkv|rm|rmvb|mov|wmv|asf|ts|flv|".indexOf(`|${r}|`) >= 0 ? html += video_icon : "|html|php|css|go|java|js|json|txt|sh|".indexOf(`|${r}|`) >= 0 ? html += code_icon : "|zip|rar|tar|.7z|.gz|".indexOf(`|${r}|`) >= 0 ? html += zip_icon : "|bmp|jpg|jpeg|png|gif|".indexOf(`|${r}|`) >= 0 ? html += image_icon : "|m4a|mp3|flac|wav|ogg|".indexOf(`|${r}|`) >= 0 ? html += audio_icon : "|md|".indexOf(`|${r}|`) >= 0 ? html += markdown_icon : "|pdf|".indexOf(`|${r}|`) >= 0 ? html += pdf_icon : html += file_icon,
                (function() {
                    var studiedStatus = isStudied(l.id) ? 'bi bi-check-circle-fill text-success' : 'bi bi-circle text-muted';
                    var studiedTitle = isStudied(l.id) ? 'Marcado como estudado - Clique para desmarcar' : 'Clique para marcar como estudado';
                    // Check if file is favorite
                    const searchFileFavoriteStatus = isFavorite(l.id) ? 'bi-star-fill text-warning' : 'bi-star text-muted';
                    const searchFileFavoriteTitle = isFavorite(l.id) ? 'Remover dos favoritos' : 'Adicionar aos favoritos';
                    
                    html += ` <span onclick="onSearchResultItemClick('${l.id}', true)" data-bs-toggle="modal" data-bs-target="#SearchModel">${l.name}</span><i class="favorite-icon ${searchFileFavoriteStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${searchFileFavoriteTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleFavoriteStatus('${l.id}', '${l.name.replace(/'/g, "\\'")}', this.parentElement);"></i><i class="studied-icon ${studiedStatus} float-end me-3" style="cursor: pointer; font-size: 1.1rem; width: 1.1rem; height: 1.1rem; display: inline-flex; align-items: center; justify-content: center;" title="${studiedTitle}" onclick="event.preventDefault(); event.stopPropagation(); toggleStudiedStatus('${l.id}', '${l.name.replace(/'/g, "\\'")}', this.parentElement);"></i>${UI.display_download ? `<a href="#" onclick="initiateDownload('${l.name}', '${s}', '${l.size}'); return false;"><svg class="float-end"width="25px" style="margin-left: 8px;" xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 16 16"> <path d="M.5 9.9a.5.5 0 0 1 .5.5v2.5a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-2.5a.5.5 0 0 1 1 0v2.5a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2v-2.5a.5.5 0 0 1 .5-.5z"></path> <path d="M7.646 11.854a.5.5 0 0 0 .708 0l3-3a.5.5 0 0 0-.708-.708L8.5 10.293V1.5a.5.5 0 0 0-1 0v8.793L5.354 8.146a.5.5 0 1 0-.708.708l3 3z"></path> </svg></a>` : ""}<span class="badge float-end csize"> ${UI.display_size ? '<span class="badge bg-primary float-end me-2"> ' + l.size + " </span>" : ""}${UI.display_time ? ' <span class="badge bg-info float-end me-2"> ' + l.modifiedTime + " </span>" : ""}</div>`;
                })()
            }
        }
        o && UI.allow_selecting_files && (document.getElementById("select_items").style.display = "block"),
        t.html(("0" == t.data("curPageIndex") ? "" : t.html()) + html),
        n && (total_size = formatFileSize(a) || "0 Bytes",
        total_items = t.find(".countitems").length,
        total_files = t.find(".size_items").length,
        0 == total_items ? $("#count").removeClass("d-none").find(".number").text("Nenhum resultado") : 1 == total_items ? $("#count").removeClass("d-none").find(".number").text(total_items + " item") : $("#count").removeClass("d-none").find(".number").text(total_items + " Itens"),
        0 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text("Não foi encontrado nada") : 1 == total_files ? $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivo com tamanho " + total_size) : $("#count").removeClass("d-none").find(".totalsize").text(total_files + " Arquivos com tamanho " + total_size))
    } catch (e) {
        console.log(e)
    }
}
function onSearchResultItemClick(e, t) {
    var n = window.current_drive_order
      , a = "Carregando...";
    $("#SearchModelLabel").html(a);
    var i = `<div class="d-flex justify-content-center"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div>`;
    $("#modal-body-space").html(i);
    var o = {
        id: e
    };
    fetch(`/${n}:id2path`, {
        method: "POST",
        body: JSON.stringify(o),
        headers: {
            "Content-Type": "application/x-www-form-urlencoded"
        }
    }).then((function(e) {
        if (e.ok)
            return e.json();
        throw new Error("Request failed.")
    }
    )).then((function(e) {
        var n = `${e.path}`.replace(new RegExp("#","g"), "%23").replace(new RegExp("\\?","g"), "%3F");
        a = "Resultado",
        $("#SearchModelLabel").html(a),
        i = `<a class="btn btn-info" href="${n}${t ? "?a=view" : ""}">Abrir</a> <a class="btn btn-secondary" href="${n}${t ? "?a=view" : ""}" target="_blank">Abrir em nova aba</a>`,
        $("#modal-body-space").html(i)
    }
    )).catch((function(n) {
        a = "Fallback Method",
        $("#SearchModelLabel").html(a),
        i = `<a class="btn btn-info" href="/fallback?id=${e}&${t ? "a=view" : ""}">Abrir</a> <a class="btn btn-secondary" href="/fallback?id=${e}&${t ? "a=view" : ""}" target="_blank">Abrir em nova aba</a>`,
        $("#modal-body-space").html(i)
    }
    ))
}
function get_file(e, t, n) {
    var a = "file_path_" + e + t.modifiedTime
      , i = localStorage.getItem(a);
    if (null != i)
        return n(i);
    $.get(e, (function(e) {
        localStorage.setItem(a, e),
        n(e)
    }
    ))
}
async function fallback(e, t) {
    if (!t)
        return list(e, !0);
    var n = await getCookie("root_id") || "";
    $("#content").html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    fetch("/0:fallback", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            id: e
        })
    }).then((function(e) {
        if (!e.ok)
            throw new Error("Request failed");
        return e.json()
    }
    )).then((function(e) {
        var t = e.mimeType
          , a = e.fileExtension;
        const i = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"]
          , o = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"]
          , l = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"]
          , r = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"]
          , s = ["pdf"];
        if ("application/vnd.google-apps.folder" === t)
            window.location.href = window.location.pathname + "/";
        else if (a) {
            const d = e.name
              , c = encodeURIComponent(d)
              , p = formatFileSize(e.size)
              , m = UI.second_domain_for_dl ? UI.downloaddomain + e.link : 
                    (e.link.startsWith('http') ? e.link : window.location.origin + e.link)
              , g = e.id;
            if (t.includes("video") || o.includes(a)) {
                file_video(d, c, p, e.thumbnailLink ? e.thumbnailLink.replace("s220", "s0") : UI.poster, m, t, g, n)
            } else
                t.includes("audio") || l.includes(a) ? file_audio(d, c, p, m, g, n) : t.includes("image") || r.includes(a) ? file_image(d, c, p, m, g, n) : t.includes("pdf") || s.includes(a) ? file_pdf(d, c, p, m, g, n) : i.includes(a) ? file_code(d, c, p, m, g, n) : file_others(d, c, p, m, g, n)
        }
    }
    )).catch((function(e) {
        var t = `\n          <div class="container"><br>\n          <div class="card text-center">\n            <div class="card-body text-center">\n              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + e + '</div>\n            </div>\n            <p>The requested URL was not found on this server. That’s all we know.</p>\n            <div class="card-text text-center">\n              <div class="btn-group text-center">\n                <a href="/" type="button" class="btn btn-primary">Homepage</a>\n              </div>\n            </div><br>\n          </div>\n        </div>';
        $("#content").html(t)
    }
    ))
}
async function file(e) {
    var t = await getCookie("root_id") || "";
    e.split("/").pop();
    $("#content").html(`<div class="d-flex justify-content-center" style="height: 150px"><div class="spinner-border ${UI.loading_spinner_class} m-5" role="status" id="spinner"><span class="sr-only"></span></div></div>`),
    fetch("", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            path: e
        })
    }).then((function(e) {
        if (!e.ok)
            throw new Error("Request failed");
        return e.json()
    }
    )).then((function(e) {
        console.log(e);
        var n = e.mimeType
          , a = e.fileExtension;
        const i = ["php", "css", "go", "java", "js", "json", "txt", "sh", "md", "html", "xml", "py", "rb", "c", "cpp", "h", "hpp"]
          , o = ["mp4", "webm", "avi", "mpg", "mpeg", "mkv", "rm", "rmvb", "mov", "wmv", "asf", "ts", "flv", "3gp", "m4v"]
          , l = ["mp3", "flac", "wav", "ogg", "m4a", "aac", "wma", "alac"]
          , r = ["bmp", "jpg", "jpeg", "png", "gif", "svg", "tiff", "ico"]
          , s = ["pdf"];
        if ("application/vnd.google-apps.folder" === n)
            window.location.href = window.location.pathname + "/";
        else if (a) {
            const d = e.name
              , c = encodeURIComponent(d)
              , p = formatFileSize(e.size)
              , m = UI.second_domain_for_dl ? UI.downloaddomain + e.link : 
                    (e.link.startsWith('http') ? e.link : window.location.origin + e.link)
              , g = e.id;
            if (n.includes("video") || o.includes(a)) {
                file_video(d, c, p, e.thumbnailLink ? e.thumbnailLink.replace("s220", "s0") : UI.poster, m, n, g, t)
            } else
                n.includes("audio") || l.includes(a) ? file_audio(d, c, p, m, g, t) : n.includes("image") || r.includes(a) ? file_image(d, c, p, m, g, t) : n.includes("pdf") || s.includes(a) ? file_pdf(d, c, p, m, g, t) : i.includes(a) ? file_code(d, c, p, m, g, t) : file_others(d, c, p, m, g, t)
        }
    }
    )).catch((function(e) {
        var t = `\n          <div class="container"><br>\n          <div class="card text-center">\n            <div class="card-body text-center">\n              <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error. ` + e + '</div>\n            </div>\n            <p>The requested URL was not found on this server. That’s all we know.</p>\n            <div class="card-text text-center">\n              <div class="btn-group text-center">\n                <a href="/" type="button" class="btn btn-primary">Homepage</a>\n              </div>\n            </div><br>\n          </div>\n        </div>';
        $("#content").html(t)
    }
    ))
}
const copyButton = '<button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copiar</span> </button>';

// Download Progress Modal Functions
function showDownloadModal(fileName, fileUrl, fileSize) {
    // Create modal HTML
    const modalHTML = `
    <div class="modal fade" id="downloadModal" tabindex="-1" aria-labelledby="downloadModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="downloadModalLabel">
                        <i class="bi bi-download me-2"></i>Download
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <i class="bi bi-file-earmark-arrow-down text-primary" style="font-size: 3rem;"></i>
                    </div>
                    <h6 class="mb-2" style="word-break: break-all; word-wrap: break-word; max-width: 100%; overflow-wrap: break-word; hyphens: auto;">${fileName}</h6>
                    <p class="text-muted mb-3">${fileSize}</p>
                    
                    <div class="progress mb-3" style="height: 8px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                             role="progressbar" style="width: 0%" id="downloadProgress"></div>
                    </div>
                    
                    <div class="row text-center">
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-success" id="progressPercent">0%</div>
                                <small class="text-muted">Progresso</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-info" id="downloadSpeed">0 KB/s</div>
                                <small class="text-muted">Velocidade</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-warning" id="downloadSize">0 MB</div>
                                <small class="text-muted">Baixado</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <small class="text-muted" id="downloadStatus">Clique em "Iniciar Download" para começar</small>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" id="cancelDownloadBtn" data-bs-dismiss="modal">Cancelar</button>
                    <button type="button" class="btn btn-primary" id="startDownloadBtn" disabled>
                        <i class="bi bi-download me-1"></i>Iniciar Download
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('downloadModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('downloadModal'));
    modal.show();
    
    // Start countdown only - download will be initiated by user click
    startDownloadCountdown(fileName, fileUrl, fileSize);
}

function startDownloadCountdown(fileName, fileUrl, fileSize) {
    const progressElement = document.getElementById('downloadProgress');
    const progressPercentElement = document.getElementById('progressPercent');
    const speedElement = document.getElementById('downloadSpeed');
    const statusElement = document.getElementById('downloadStatus');
    const startBtn = document.getElementById('startDownloadBtn');
    
    // Hide countdown element and show download ready
    const countdownElement = document.getElementById('countdown');
    if (countdownElement) {
        countdownElement.textContent = '✓';
        countdownElement.parentElement.querySelector('small').textContent = 'Pronto';
    }
    
    // Enable button immediately
    startBtn.disabled = false;
    statusElement.textContent = 'Pronto para download!';
    
    // Start download button event - remove any existing listeners first
    const newStartBtn = document.getElementById('startDownloadBtn');
    if (newStartBtn) {
        // Clone the button to remove all event listeners
        const newBtn = newStartBtn.cloneNode(true);
        newStartBtn.parentNode.replaceChild(newBtn, newStartBtn);
        
        // Add new event listener
        newBtn.addEventListener('click', () => {
            startDownload(fileName, fileUrl, fileSize);
        });
    }
    
    // Add event listener for cancel button
    const cancelBtn = document.getElementById('cancelDownloadBtn');
    if (cancelBtn) {
        cancelBtn.addEventListener('click', () => {
            cancelDownload();
        });
    }
}

function startDownload(fileName, fileUrl, fileSize) {
    const progressElement = document.getElementById('downloadProgress');
    const progressPercentElement = document.getElementById('progressPercent');
    const speedElement = document.getElementById('downloadSpeed');
    const statusElement = document.getElementById('downloadStatus');
    const startBtn = document.getElementById('startDownloadBtn');
    
    startBtn.disabled = true;
    startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Baixando...';
    
    // Update cancel button to show it can cancel the download
    const cancelBtn = document.getElementById('cancelDownloadBtn');
    if (cancelBtn) {
        cancelBtn.innerHTML = '<i class="bi bi-x-circle me-1"></i>Cancelar Download';
        cancelBtn.classList.remove('btn-secondary');
        cancelBtn.classList.add('btn-danger');
    }
    
    // Real download with progress tracking
    downloadWithProgress(fileUrl, fileName, (progress, loaded, total, speed) => {
        // Update progress bar
        progressElement.style.width = progress + '%';
        progressPercentElement.textContent = Math.round(progress) + '%';
        
        // Update speed
        if (speed > 0) {
            speedElement.textContent = formatSpeed(speed);
        }
        
        // Update downloaded size
        const downloadSizeElement = document.getElementById('downloadSize');
        if (downloadSizeElement) {
            downloadSizeElement.textContent = formatFileSize(loaded);
        }
        
        // Update status
        if (progress < 10) {
            statusElement.textContent = 'Conectando ao servidor...';
        } else if (progress < 50) {
            statusElement.textContent = 'Baixando arquivo...';
        } else if (progress < 90) {
            statusElement.textContent = 'Processando dados...';
        } else if (progress < 100) {
            statusElement.textContent = 'Finalizando download...';
        } else {
            statusElement.textContent = 'Download concluído!';
            progressElement.classList.remove('progress-bar-animated');
            progressElement.classList.add('bg-success');
            
            // Close modal after 1 second
            setTimeout(() => {
                const modal = bootstrap.Modal.getInstance(document.getElementById('downloadModal'));
                modal.hide();
            }, 1000);
        }
    }).catch(error => {
        console.error('Erro no download:', error);
        
        if (error.message === 'Download cancelled by user') {
            statusElement.textContent = 'Download cancelado pelo usuário';
            progressElement.classList.remove('progress-bar-animated');
            progressElement.classList.add('bg-warning');
        } else {
            statusElement.textContent = 'Erro no download: ' + error.message;
            progressElement.classList.remove('progress-bar-animated');
            progressElement.classList.add('bg-danger');
        }
        
        startBtn.disabled = false;
        startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Tentar Novamente';
        
        // Reset cancel button
        const cancelBtn = document.getElementById('cancelDownloadBtn');
        if (cancelBtn) {
            cancelBtn.innerHTML = 'Cancelar';
            cancelBtn.classList.remove('btn-danger');
            cancelBtn.classList.add('btn-secondary');
        }
    });
}

// Global variable to track download cancellation
let currentDownloadController = null;
// Global variable to track bulk download cancellation
let currentBulkDownloadController = null;
let isBulkDownloadCancelled = false;

// Real download function with progress tracking and cancellation support
async function downloadWithProgress(url, filename, progressCallback) {
    // Create AbortController for cancellation
    const controller = new AbortController();
    currentDownloadController = controller;
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentLength = response.headers.get('content-length');
        const total = parseInt(contentLength, 10);
        let loaded = 0;
        let lastTime = Date.now();
        let lastLoaded = 0;
        let startTime = Date.now();
        
        const reader = response.body.getReader();
        const chunks = [];
        
        // Initial progress update
        progressCallback(0, 0, total, 0);
        
        while (true) {
            // Check if download was cancelled
            if (controller.signal.aborted) {
                reader.cancel();
                throw new Error('Download cancelled by user');
            }
            
            const { done, value } = await reader.read();
            
            if (done) break;
            
            chunks.push(value);
            loaded += value.length;
            
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTime;
            
            // Calculate speed and progress every 200ms for smoother updates
            if (timeDiff >= 200) {
                const speed = ((loaded - lastLoaded) / timeDiff) * 1000; // bytes per second
                const progress = total ? (loaded / total) * 100 : 0;
                
                progressCallback(progress, loaded, total, speed);
                
                lastTime = currentTime;
                lastLoaded = loaded;
            }
        }
        
        // Check if download was cancelled before creating blob
        if (controller.signal.aborted) {
            throw new Error('Download cancelled by user');
        }
        
        // Create blob and download
        const blob = new Blob(chunks);
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        window.URL.revokeObjectURL(downloadUrl);
        
        // Final progress update
        progressCallback(100, loaded, total, 0);
        
    } catch (error) {
        if (error.name === 'AbortError' || error.message === 'Download cancelled by user') {
            throw new Error('Download cancelled by user');
        }
        throw error;
    } finally {
        currentDownloadController = null;
    }
}

// Format speed for display
function formatSpeed(bytesPerSecond) {
    if (bytesPerSecond < 1024) {
        return Math.round(bytesPerSecond) + ' B/s';
    } else if (bytesPerSecond < 1024 * 1024) {
        return Math.round(bytesPerSecond / 1024) + ' KB/s';
    } else {
        return Math.round(bytesPerSecond / (1024 * 1024)) + ' MB/s';
    }
}

// Format file size for display
function formatFileSize(bytes) {
    if (bytes === 0) return '0 B';
    
    const k = 1024;
    const sizes = ['B', 'KB', 'MB', 'GB', 'TB'];
    const i = Math.floor(Math.log(bytes) / Math.log(k));
    
    return parseFloat((bytes / Math.pow(k, i)).toFixed(1)) + ' ' + sizes[i];
}

// Enhanced download function
function initiateDownload(fileName, fileUrl, fileSize) {
    showDownloadModal(fileName, fileUrl, fileSize);
}

// Cancel download function
function cancelDownload() {
    if (currentDownloadController) {
        currentDownloadController.abort();
        currentDownloadController = null;
        
        // Update UI to show cancellation
        const statusElement = document.getElementById('downloadStatus');
        const progressElement = document.getElementById('downloadProgress');
        const startBtn = document.getElementById('startDownloadBtn');
        
        if (statusElement) {
            statusElement.textContent = 'Download cancelado pelo usuário';
        }
        
        if (progressElement) {
            progressElement.classList.remove('progress-bar-animated');
            progressElement.classList.add('bg-warning');
        }
        
        if (startBtn) {
            startBtn.disabled = false;
            startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Iniciar Download';
        }
    }
}

// Cancel bulk download function
function cancelBulkDownload() {
    // Set cancellation flag
    isBulkDownloadCancelled = true;
    
    // Abort current download if any
    if (currentBulkDownloadController) {
        currentBulkDownloadController.abort();
        currentBulkDownloadController = null;
    }
    
    // Update UI to show cancellation
    const statusElement = document.getElementById('bulkDownloadStatus');
    const progressElement = document.getElementById('bulkDownloadProgress');
    const startBtn = document.getElementById('startBulkDownloadBtn');
    const cancelBtn = document.getElementById('cancelBulkDownloadBtn');
    const closeBtn = document.getElementById('closeBulkDownloadModal');
    
    if (statusElement) {
        statusElement.textContent = 'Cancelando download...';
    }
    
    if (progressElement) {
        progressElement.classList.remove('progress-bar-animated');
        progressElement.classList.add('bg-warning');
    }
    
    // Restore buttons
    if (startBtn) {
        startBtn.disabled = false;
        startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Iniciar Downloads';
    }
    
    if (cancelBtn) {
        cancelBtn.classList.add('d-none');
    }
    
    if (closeBtn) {
        closeBtn.classList.remove('d-none');
    }
}

// Bulk download function with modal
function initiateBulkDownload(links) {
    if (links.length === 0) {
        showErrorModal("Nenhum Item Selecionado", "Por favor, selecione pelo menos um item para baixar.");
        return;
    }
    
    // Filtrar links vazios ou inválidos
    const validLinks = links.filter(link => link && link.trim() !== '' && link.trim() !== 'on');
    
    if (validLinks.length === 0) {
        showErrorModal("Nenhum Item Válido", "Nenhum arquivo válido foi selecionado.");
        return;
    }
    
    // Create array with both links and file names
    const filesWithNames = validLinks.map(link => {
        // Usar CSS.escape para escapar caracteres especiais no seletor
        const escapedLink = CSS.escape(link);
        const checkbox = document.querySelector(`input[type="checkbox"][value="${escapedLink}"]`);
        const fileName = checkbox ? checkbox.getAttribute('data-name') : 'Arquivo Desconhecido';
        
        // Se ainda não encontrou nome, tentar extrair da URL
        if (fileName === 'Arquivo Desconhecido' && link) {
            try {
                const urlParts = link.split('/').filter(p => p);
                if (urlParts.length > 0) {
                    const lastPart = urlParts[urlParts.length - 1];
                    const decodedName = decodeURIComponent(lastPart.split('?')[0]);
                    if (decodedName && decodedName !== 'on') {
                        return {
                            link: link,
                            name: decodedName
                        };
                    }
                }
            } catch (e) {
                // Ignorar erro
            }
        }
        
        return {
            link: link,
            name: fileName
        };
    });
    
    showBulkDownloadModal(filesWithNames);
}

// Bulk download modal
function showBulkDownloadModal(filesWithNames) {
    const totalFiles = filesWithNames.length;
    const modalHTML = `
    <div class="modal fade" id="bulkDownloadModal" tabindex="-1" aria-labelledby="bulkDownloadModalLabel" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered modal-lg">
            <div class="modal-content">
                <div class="modal-header bg-primary text-white">
                    <h5 class="modal-title" id="bulkDownloadModalLabel">
                        <i class="bi bi-download me-2"></i>Download em Massa
                    </h5>
                    <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                </div>
                <div class="modal-body text-center">
                    <div class="mb-3">
                        <i class="bi bi-files text-primary" style="font-size: 3rem;"></i>
                    </div>
                    <h6 class="mb-2">${totalFiles} arquivo${totalFiles > 1 ? 's' : ''} selecionado${totalFiles > 1 ? 's' : ''}</h6>
                    <p class="text-muted mb-3">Os arquivos serão baixados sequencialmente</p>
                    
                    <div class="progress mb-3" style="height: 8px;">
                        <div class="progress-bar progress-bar-striped progress-bar-animated bg-primary" 
                             role="progressbar" style="width: 0%" id="bulkDownloadProgress"></div>
                    </div>
                    
                    <div class="row text-center">
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-success" id="bulkProgressPercent">0%</div>
                                <small class="text-muted">Progresso</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-info" id="bulkCurrentFile">0/${totalFiles}</div>
                                <small class="text-muted">Arquivo Atual</small>
                            </div>
                        </div>
                        <div class="col-4">
                            <div class="border rounded p-2">
                                <div class="h5 mb-0 text-warning" id="bulkDownloadSpeed">0 KB/s</div>
                                <small class="text-muted">Velocidade</small>
                            </div>
                        </div>
                    </div>
                    
                    <div class="mt-3">
                        <small class="text-muted" id="bulkDownloadStatus">Clique em "Iniciar Downloads" para começar</small>
                    </div>
                    
                    <div class="mt-3" id="bulkFileList" style="max-height: 200px; overflow-y: auto; text-align: left;">
                        <h6>Arquivos selecionados:</h6>
                        <ul class="list-group list-group-flush">
                            ${filesWithNames.map((file, index) => {
                                return `<li class="list-group-item d-flex justify-content-between align-items-center">
                                    <span style="max-width: 70%; word-break: break-all; word-wrap: break-word; overflow-wrap: break-word; hyphens: auto; display: inline-block;">${file.name}</span>
                                    <span class="badge bg-secondary" id="file-status-${index}">Pendente</span>
                                </li>`;
                            }).join('')}
                        </ul>
                    </div>
                </div>
                <div class="modal-footer">
                    <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" id="closeBulkDownloadModal">Fechar</button>
                    <button type="button" class="btn btn-danger d-none" id="cancelBulkDownloadBtn" data-bs-dismiss="modal">
                        <i class="bi bi-x-circle me-1"></i>Cancelar Download
                    </button>
                    <button type="button" class="btn btn-primary" id="startBulkDownloadBtn">
                        <i class="bi bi-download me-1"></i>Iniciar Downloads
                    </button>
                </div>
            </div>
        </div>
    </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('bulkDownloadModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHTML);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('bulkDownloadModal'));
    modal.show();
    
    // Add event listener for start button
    document.getElementById('startBulkDownloadBtn').addEventListener('click', () => {
        startBulkDownload(filesWithNames);
    });
    
    // Add event listener for cancel button
    document.getElementById('cancelBulkDownloadBtn').addEventListener('click', () => {
        cancelBulkDownload();
    });
    
    // Reset cancellation flag when modal is shown
    isBulkDownloadCancelled = false;
}

// Studied materials management
function markAsStudied(itemId, itemName, isStudied, itemPath = null) {
    const studiedItems = getStudiedItems();
    if (isStudied) {
        let finalPath = itemPath || window.location.pathname;
        
        // If no specific path provided, try to detect if it's a file and add ?a=view
        if (!itemPath) {
            // Check if current item is a file by looking for file extensions
            const fileExtensions = ['.pdf', '.txt', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3', '.zip', '.rar'];
            const hasFileExtension = fileExtensions.some(ext => itemName.toLowerCase().includes(ext));
            
            if (hasFileExtension && !finalPath.includes('?a=view')) {
                finalPath += '?a=view';
            }
        }
        
        studiedItems[itemId] = {
            name: itemName,
            date: new Date().toISOString(),
            path: finalPath
        };
    } else {
        delete studiedItems[itemId];
    }
    localStorage.setItem('studiedItems', JSON.stringify(studiedItems));
}

// Favorites management
function markAsFavorite(itemId, itemName, isFavorite, itemPath = null) {
    const favoriteItems = getFavoriteItems();
    if (isFavorite) {
        let finalPath = itemPath || window.location.pathname;
        
        // If no specific path provided, try to detect if it's a file and add ?a=view
        if (!itemPath) {
            // Check if current item is a file by looking for file extensions
            const fileExtensions = ['.pdf', '.txt', '.doc', '.docx', '.xls', '.xlsx', '.ppt', '.pptx', '.jpg', '.jpeg', '.png', '.gif', '.mp4', '.mp3', '.zip', '.rar'];
            const hasFileExtension = fileExtensions.some(ext => itemName.toLowerCase().includes(ext));
            
            if (hasFileExtension && !finalPath.includes('?a=view')) {
                finalPath += '?a=view';
            }
        }
        
        favoriteItems[itemId] = {
            name: itemName,
            date: new Date().toISOString(),
            path: finalPath
        };
    } else {
        delete favoriteItems[itemId];
    }
    localStorage.setItem('favoriteItems', JSON.stringify(favoriteItems));
}

function getFavoriteItems() {
    const stored = localStorage.getItem('favoriteItems');
    return stored ? JSON.parse(stored) : {};
}

function isFavorite(itemId) {
    const favoriteItems = getFavoriteItems();
    return favoriteItems.hasOwnProperty(itemId);
}

function toggleFavoriteStatus(itemId, itemName, element, itemPath = null) {
    const currentlyFavorite = isFavorite(itemId);
    const newStatus = !currentlyFavorite;
    
    markAsFavorite(itemId, itemName, newStatus, itemPath);
    updateFavoriteIcon(element, newStatus);
}

function updateFavoriteIcon(element, isFavorite) {
    const icon = element.querySelector('.favorite-icon');
    if (icon) {
        if (isFavorite) {
            icon.className = 'favorite-icon bi bi-star-fill text-warning';
            icon.title = 'Remover dos favoritos';
        } else {
            icon.className = 'favorite-icon bi bi-star text-muted';
            icon.title = 'Adicionar aos favoritos';
        }
    }
}

function getStudiedItems() {
    const stored = localStorage.getItem('studiedItems');
    return stored ? JSON.parse(stored) : {};
}

function isStudied(itemId) {
    const studiedItems = getStudiedItems();
    return studiedItems.hasOwnProperty(itemId);
}

function toggleStudiedStatus(itemId, itemName, element, itemPath = null) {
    const currentlyStudied = isStudied(itemId);
    const newStatus = !currentlyStudied;
    
    markAsStudied(itemId, itemName, newStatus, itemPath);
    updateStudiedIcon(element, newStatus);
}

function updateStudiedIcon(element, isStudied) {
    const icon = element.querySelector('.studied-icon');
    if (icon) {
        if (isStudied) {
            icon.className = 'studied-icon bi bi-check-circle-fill text-success';
            icon.title = 'Marcado como estudado - Clique para desmarcar';
        } else {
            icon.className = 'studied-icon bi bi-circle text-muted';
            icon.title = 'Clique para marcar como estudado';
        }
    }
}

function showStudiedStats() {
    const studiedItems = getStudiedItems();
    const totalStudied = Object.keys(studiedItems).length;
    
    let statsHtml = `
        <div class="modal fade" id="studiedStatsModal" tabindex="-1" aria-labelledby="studiedStatsModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                    <div class="modal-header" style="background: linear-gradient(135deg, #28a745, #20c997); border: none; border-radius: 15px 15px 0 0; padding: 1.5rem;">
                        <h5 class="modal-title text-white fw-bold" id="studiedStatsModalLabel" style="font-size: 1.3rem;">
                            <i class="bi bi-graph-up me-2"></i>Progresso de Estudos
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div class="text-center mb-4">
                            <div class="d-inline-flex align-items-center justify-content-center rounded-circle bg-success text-white" style="width: 60px; height: 60px; font-size: 1.5rem;">
                                <i class="bi bi-check-circle-fill"></i>
                            </div>
                            <h4 class="mt-3 mb-1">${totalStudied} Materiais Estudados</h4>
                            <p class="text-muted mb-4">Acompanhe seu progresso de aprendizado</p>
                        </div>
    `;
    
    if (totalStudied > 0) {
        statsHtml += `
                        <h6 class="fw-bold mb-3" style="color: var(--bs-body-color);">
                            <i class="bi bi-list-check me-2"></i>Materiais Concluídos
                        </h6>
                        <div class="list-group" style="max-height: 300px; overflow-y: auto; border-radius: 10px;">
        `;
        
        // Ordenar por data (mais recente primeiro)
        const sortedItems = Object.entries(studiedItems)
            .sort(([,a], [,b]) => new Date(b.date) - new Date(a.date));
        
        sortedItems.forEach(([id, item]) => {
            const date = new Date(item.date).toLocaleDateString('pt-BR');
            const time = new Date(item.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            statsHtml += `
                <div class="list-group-item d-flex justify-content-between align-items-center" style="cursor: pointer; border: none; border-bottom: 1px solid var(--bs-border-color); padding: 1rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='var(--bs-secondary-bg)'" onmouseout="this.style.backgroundColor='var(--bs-body-bg)'" onclick="navigateToStudiedItem('${id}', '${item.name.replace(/'/g, "\\'")}')" title="Clique para ir para este material">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-check-circle-fill me-3" style="font-size: 1.2rem; color: var(--bs-success);"></i>
                        <span class="fw-medium">${item.name}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <small class="text-muted me-3">${date} às ${time}</small>
                        <i class="bi bi-arrow-right" style="color: var(--bs-secondary);"></i>
                    </div>
                </div>
            `;
        });
        
        statsHtml += `
                        </div>
                        <div class="mt-4 text-center">
                            <button class="btn btn-outline-danger" onclick="clearAllStudied()" style="border-radius: 25px; padding: 0.5rem 1.5rem;">
                                <i class="bi bi-trash me-2"></i>Limpar Todos os Estudados
                            </button>
                        </div>
        `;
    } else {
        statsHtml += `
                        <div class="text-center py-5">
                            <i class="bi bi-circle text-muted" style="font-size: 3rem;"></i>
                            <p class="text-muted mt-3">Nenhum material estudado ainda</p>
                            <small class="text-muted">Clique no círculo ao lado dos materiais para marcá-los como estudados</small>
                        </div>
        `;
    }
    
    statsHtml += `
                    </div>
                    <div class="modal-footer" style="border: none; border-radius: 0 0 15px 15px; padding: 1.5rem; background: #f8f9fa;">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border-radius: 25px; padding: 0.5rem 1.5rem;">
                            <i class="bi bi-x-circle me-2"></i>Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('studiedStatsModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', statsHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('studiedStatsModal'));
    modal.show();
}

function showFavorites() {
    const favoriteItems = getFavoriteItems();
    const totalFavorites = Object.keys(favoriteItems).length;
    
    let statsHtml = `
        <div class="modal fade" id="favoritesModal" tabindex="-1" aria-labelledby="favoritesModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                    <div class="modal-header" style="background: linear-gradient(135deg, #6c757d, #495057); border: none; border-radius: 15px 15px 0 0; padding: 1.5rem;">
                        <h5 class="modal-title text-white fw-bold" id="favoritesModalLabel" style="font-size: 1.3rem;">
                            <i class="bi bi-star-fill me-2"></i>Meus Favoritos
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div class="row text-center mb-4">
                            <div class="col-12">
                                <div class="card" style="background: linear-gradient(135deg, #f8f9fa, #e9ecef); border: none; border-radius: 12px; box-shadow: 0 4px 15px rgba(0,0,0,0.1);">
                                    <div class="card-body py-4">
                                        <div class="d-flex align-items-center justify-content-center mb-2">
                                            <i class="bi bi-star-fill" style="font-size: 2.5rem; margin-right: 1rem; color: #6c757d;"></i>
                                            <div>
                                                <h2 class="mb-0 fw-bold" style="font-size: 2.5rem; color: #495057;">${totalFavorites}</h2>
                                                <p class="text-muted mb-0 fw-medium">Itens Favoritos</p>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
    `;
    
    if (totalFavorites > 0) {
        statsHtml += `
                        <h6 class="fw-bold text-dark mb-3">
                            <i class="bi bi-list-ul me-2"></i>Lista de Favoritos
                        </h6>
                        <div class="list-group" style="max-height: 300px; overflow-y: auto; border-radius: 10px;">
        `;
        
        const sortedItems = Object.entries(favoriteItems)
            .sort(([,a], [,b]) => new Date(b.date) - new Date(a.date));
        
        sortedItems.forEach(([id, item]) => {
            const date = new Date(item.date).toLocaleDateString('pt-BR');
            const time = new Date(item.date).toLocaleTimeString('pt-BR', { hour: '2-digit', minute: '2-digit' });
            statsHtml += `
                <div class="list-group-item d-flex justify-content-between align-items-center" style="cursor: pointer; border: none; border-bottom: 1px solid var(--bs-border-color); padding: 1rem; transition: all 0.3s ease;" onmouseover="this.style.backgroundColor='var(--bs-secondary-bg)'" onmouseout="this.style.backgroundColor='var(--bs-body-bg)'" onclick="navigateToFavoriteItem('${id}', '${item.name.replace(/'/g, "\\'")}')" title="Clique para ir para este favorito">
                    <div class="d-flex align-items-center">
                        <i class="bi bi-star-fill me-3" style="font-size: 1.2rem; color: #6c757d;"></i>
                        <span class="fw-medium">${item.name}</span>
                    </div>
                    <div class="d-flex align-items-center">
                        <small class="text-muted me-3">${date} às ${time}</small>
                        <i class="bi bi-arrow-right" style="color: var(--bs-secondary);"></i>
                    </div>
                </div>
            `;
        });
        
        statsHtml += `
                        </div>
                        <div class="mt-4 text-center">
                            <button class="btn btn-outline-danger" onclick="clearAllFavorites()" style="border-radius: 25px; padding: 0.5rem 1.5rem;">
                                <i class="bi bi-trash me-2"></i>Limpar Todos os Favoritos
                            </button>
                        </div>
        `;
    } else {
        statsHtml += `
                        <div class="text-center py-5">
                            <div class="mb-4">
                                <i class="bi bi-star" style="font-size: 4rem; color: #6c757d; opacity: 0.5;"></i>
                            </div>
                            <h5 class="text-muted mb-3">Nenhum favorito ainda</h5>
                            <p class="text-muted mb-4">Clique no ícone <i class="bi bi-star" style="color: #6c757d;"></i> ao lado dos itens para marcá-los como favoritos!</p>
                            <div class="alert alert-light" style="border-radius: 10px; border: 1px solid #dee2e6; background: #f8f9fa;">
                                <i class="bi bi-lightbulb me-2" style="color: #6c757d;"></i>
                                <strong>Dica:</strong> Os favoritos ajudam você a acessar rapidamente seus materiais mais importantes!
                            </div>
                        </div>
        `;
    }
    
    statsHtml += `
                    </div>
                    <div class="modal-footer" style="border: none; border-radius: 0 0 15px 15px; padding: 1.5rem; background: #f8f9fa;">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal" style="border-radius: 25px; padding: 0.5rem 1.5rem;">
                            <i class="bi bi-x-circle me-2"></i>Fechar
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    const existingModal = document.getElementById('favoritesModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    document.body.insertAdjacentHTML('beforeend', statsHtml);
    
    const modal = new bootstrap.Modal(document.getElementById('favoritesModal'));
    modal.show();
}

function showHistory() {
    const history = getHistory();
    
    let historyHtml = `
        <div class="modal fade" id="historyModal" tabindex="-1" aria-labelledby="historyModalLabel" aria-hidden="true">
            <div class="modal-dialog modal-lg">
                <div class="modal-content" style="border: none; border-radius: 15px; box-shadow: 0 10px 30px rgba(0,0,0,0.15);">
                    <div class="modal-header" style="background: linear-gradient(135deg, #007bff, #6610f2); border: none; border-radius: 15px 15px 0 0; padding: 1.5rem;">
                        <h5 class="modal-title text-white fw-bold" id="historyModalLabel" style="font-size: 1.3rem;">
                            <i class="bi bi-clock-history me-2"></i>Histórico de Pastas
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body" style="padding: 2rem;">
                        <div class="text-center mb-4">
                            <div class="d-inline-flex align-items-center justify-content-center rounded-circle bg-primary text-white" style="width: 60px; height: 60px; font-size: 1.5rem;">
                                <i class="bi bi-clock-history"></i>
                            </div>
                            <h4 class="mt-3 mb-1">${history.length} Pastas Visitadas</h4>
                            <p class="text-muted mb-4">Acesse rapidamente pastas visitadas recentemente</p>
                        </div>
                        
                        <div class="list-group" style="max-height: 300px; overflow-y: auto; border-radius: 10px;">
    `;
    
    history.forEach((item, index) => {
        const shortName = item.name.length > 25 ? item.name.substring(0, 25) + '...' : item.name;
        const isCurrentPath = window.location.pathname === item.path;
        const currentClass = isCurrentPath ? 'bg-primary text-white' : '';
        
        historyHtml += `
            <div class="list-group-item d-flex justify-content-between align-items-center ${currentClass}" style="cursor: pointer; border: none; border-bottom: 1px solid var(--bs-border-color); padding: 1rem; transition: all 0.3s ease;" onmouseover="if(!this.classList.contains('bg-primary')) this.style.backgroundColor='var(--bs-secondary-bg)'" onmouseout="if(!this.classList.contains('bg-primary')) this.style.backgroundColor='var(--bs-body-bg)'" onclick="navigateToPath('${item.path}')" title="Clique para ir para ${item.name}">
                <div class="d-flex align-items-center">
                    <i class="bi bi-folder me-3" style="font-size: 1.2rem;"></i>
                    <span class="fw-medium">${shortName}</span>
                </div>
                <div class="d-flex align-items-center">
                    <small class="me-3">${item.displayTime || new Date(item.timestamp || item.date).toLocaleDateString('pt-BR')}</small>
                    <i class="bi bi-arrow-right"></i>
                </div>
            </div>
        `;
    });
    
    if (history.length === 0) {
        historyHtml += `
            <div class="text-center py-5">
                <i class="bi bi-clock-history text-muted" style="font-size: 3rem;"></i>
                <p class="text-muted mt-3">Nenhuma pasta visitada ainda</p>
                <small class="text-muted">O histórico será preenchido conforme você navegar pelas pastas</small>
            </div>
        `;
    }
    
    historyHtml += `
                        </div>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('historyModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', historyHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('historyModal'));
    modal.show();
}

function navigateToPath(path) {
    window.location.href = path;
}

function clearAllFavorites() {
    const modalHtml = `
        <div class="modal fade" id="clearFavoritesModal" tabindex="-1" aria-labelledby="clearFavoritesModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-dark">
                        <h5 class="modal-title" id="clearFavoritesModalLabel">
                            <i class="bi bi-exclamation-triangle me-2"></i>Confirmar Limpeza
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <i class="bi bi-trash text-warning" style="font-size: 3rem;"></i>
                        </div>
                        <p class="text-center mb-0">Tem certeza que deseja limpar <strong>todos</strong> os favoritos?</p>
                        <p class="text-center text-muted mt-2">Esta ação não pode ser desfeita.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger" onclick="confirmClearAllFavorites()">
                            <i class="bi bi-trash me-1"></i>Limpar Todos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('clearFavoritesModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('clearFavoritesModal'));
    modal.show();
}

function confirmClearAllFavorites() {
    localStorage.removeItem('favoriteItems');
    
    // Close the confirmation modal
    const clearModal = bootstrap.Modal.getInstance(document.getElementById('clearFavoritesModal'));
    clearModal.hide();
    
    // Show success message
    setTimeout(() => {
        showFavorites(); // Refresh the favorites modal
        // Refresh the current page to update icons
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }, 300);
}

function clearAllStudied() {
    const modalHtml = `
        <div class="modal fade" id="clearStudiedModal" tabindex="-1" aria-labelledby="clearStudiedModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-warning text-dark">
                        <h5 class="modal-title" id="clearStudiedModalLabel">
                            <i class="bi bi-exclamation-triangle me-2"></i>Confirmar Limpeza
                        </h5>
                        <button type="button" class="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <i class="bi bi-trash text-warning" style="font-size: 3rem;"></i>
                        </div>
                        <p class="text-center mb-0">Tem certeza que deseja limpar <strong>todos</strong> os materiais marcados como estudados?</p>
                        <p class="text-center text-muted mt-2">Esta ação não pode ser desfeita.</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-secondary" data-bs-dismiss="modal">Cancelar</button>
                        <button type="button" class="btn btn-danger" onclick="confirmClearAllStudied()">
                            <i class="bi bi-trash me-1"></i>Limpar Todos
                        </button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('clearStudiedModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('clearStudiedModal'));
    modal.show();
}

function confirmClearAllStudied() {
    localStorage.removeItem('studiedItems');
    
    // Close the confirmation modal
    const clearModal = bootstrap.Modal.getInstance(document.getElementById('clearStudiedModal'));
    clearModal.hide();
    
    // Show success message
    setTimeout(() => {
        showStudiedStats(); // Refresh the stats modal
        // Refresh the current page to update icons
        setTimeout(() => {
            window.location.reload();
        }, 1000);
    }, 300);
}

function findItemPath(itemId) {
    const studiedItems = getStudiedItems();
    const item = studiedItems[itemId];
    
    if (item && item.path) {
        // Use the stored path where the item was marked as studied
        return item.path;
    }
    
    // Fallback: try to find the item in the current page
    const currentItems = window.currentItems || [];
    
    // Search in current items
    for (let currentItem of currentItems) {
        if (currentItem.id === itemId) {
            // Build path from current location
            const currentPath = window.location.pathname;
            return currentPath + (currentPath.endsWith('/') ? '' : '/') + encodeURIComponent(currentItem.name);
        }
    }
    
    // If not found, return root
    return '/';
}

function navigateToStudiedItem(itemId, itemName) {
    const studiedItems = getStudiedItems();
    const item = studiedItems[itemId];
    
    if (item && item.path) {
        // Use the stored path where the item was marked as studied
        // Navigate directly to the stored path
        window.location.href = item.path;
    } else {
        // Fallback to finding path
        const path = findItemPath(itemId);
        if (path && path !== '/') {
            window.location.href = path;
        } else {
            // If we can't find the exact path, show a modal and navigate to root
        const modalHtml = `
            <div class="modal fade" id="navigateModal" tabindex="-1" aria-labelledby="navigateModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bg-info text-white">
                            <h5 class="modal-title" id="navigateModalLabel">
                                <i class="bi bi-info-circle me-2"></i>Navegando
                            </h5>
                        </div>
                        <div class="modal-body">
                            <div class="text-center mb-3">
                                <i class="bi bi-folder text-info" style="font-size: 3rem;"></i>
                            </div>
                            <p class="text-center mb-0">Navegando para a raiz. Procure por <strong>"${itemName}"</strong> na lista.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-primary" onclick="window.location.href = '/'">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('navigateModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('navigateModal'));
        modal.show();
        }
    }
}

function navigateToFavoriteItem(itemId, itemName) {
    const favoriteItems = getFavoriteItems();
    const item = favoriteItems[itemId];
    
    if (item && item.path) {
        // Use the stored path where the item was marked as favorite
        // Navigate directly to the stored path
        window.location.href = item.path;
    } else {
        // If we can't find the exact path, show a modal and navigate to root
        const modalHtml = `
            <div class="modal fade" id="navigateFavoriteModal" tabindex="-1" aria-labelledby="navigateFavoriteModalLabel" aria-hidden="true">
                <div class="modal-dialog">
                    <div class="modal-content">
                        <div class="modal-header bg-warning text-dark">
                            <h5 class="modal-title" id="navigateFavoriteModalLabel">
                                <i class="bi bi-star-fill me-2"></i>Navegando para Favorito
                            </h5>
                        </div>
                        <div class="modal-body">
                            <div class="text-center mb-3">
                                <i class="bi bi-star text-warning" style="font-size: 3rem;"></i>
                            </div>
                            <p class="text-center mb-0">Navegando para a raiz. Procure por <strong>"${itemName}"</strong> na lista.</p>
                        </div>
                        <div class="modal-footer">
                            <button type="button" class="btn btn-warning" onclick="window.location.href = '/'">OK</button>
                        </div>
                    </div>
                </div>
            </div>
        `;
        
        // Remove existing modal if any
        const existingModal = document.getElementById('navigateFavoriteModal');
        if (existingModal) {
            existingModal.remove();
        }
        
        // Add modal to body
        document.body.insertAdjacentHTML('beforeend', modalHtml);
        
        // Show modal
        const modal = new bootstrap.Modal(document.getElementById('navigateFavoriteModal'));
        modal.show();
    }
}

// Show error modal
function showErrorModal(title, message) {
    const modalHtml = `
        <div class="modal fade" id="errorModal" tabindex="-1" aria-labelledby="errorModalLabel" aria-hidden="true">
            <div class="modal-dialog">
                <div class="modal-content">
                    <div class="modal-header bg-danger text-white">
                        <h5 class="modal-title" id="errorModalLabel">
                            <i class="bi bi-exclamation-triangle me-2"></i>${title}
                        </h5>
                        <button type="button" class="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div class="modal-body">
                        <div class="text-center mb-3">
                            <i class="bi bi-exclamation-circle text-danger" style="font-size: 3rem;"></i>
                        </div>
                        <p class="text-center mb-0">${message}</p>
                    </div>
                    <div class="modal-footer">
                        <button type="button" class="btn btn-primary" data-bs-dismiss="modal">Entendi</button>
                    </div>
                </div>
            </div>
        </div>
    `;
    
    // Remove existing modal if any
    const existingModal = document.getElementById('errorModal');
    if (existingModal) {
        existingModal.remove();
    }
    
    // Add modal to body
    document.body.insertAdjacentHTML('beforeend', modalHtml);
    
    // Show modal
    const modal = new bootstrap.Modal(document.getElementById('errorModal'));
    modal.show();
}

// Start bulk download
async function startBulkDownload(filesWithNames) {
    const progressElement = document.getElementById('bulkDownloadProgress');
    const progressPercentElement = document.getElementById('bulkProgressPercent');
    const currentFileElement = document.getElementById('bulkCurrentFile');
    const speedElement = document.getElementById('bulkDownloadSpeed');
    const statusElement = document.getElementById('bulkDownloadStatus');
    const startBtn = document.getElementById('startBulkDownloadBtn');
    const cancelBtn = document.getElementById('cancelBulkDownloadBtn');
    const closeBtn = document.getElementById('closeBulkDownloadModal');
    
    // Reset cancellation flag
    isBulkDownloadCancelled = false;
    
    // Update UI: hide start button, show cancel button
    startBtn.disabled = true;
    startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Baixando...';
    cancelBtn.classList.remove('d-none');
    closeBtn.classList.add('d-none');
    
    const totalFiles = filesWithNames.length;
    let completedFiles = 0;
    let totalDownloaded = 0;
    let startTime = Date.now();
    
    try {
        for (let i = 0; i < filesWithNames.length; i++) {
            // Check if download was cancelled
            if (isBulkDownloadCancelled) {
                break;
            }
            
            const file = filesWithNames[i];
            const link = file.link;
            const fileName = file.name;
            
            // Update current file status
            currentFileElement.textContent = `${i + 1}/${totalFiles}`;
            statusElement.textContent = `Baixando: ${fileName}`;
            
            // Update file status in list
            const fileStatusElement = document.getElementById(`file-status-${i}`);
            if (fileStatusElement) {
                fileStatusElement.textContent = 'Baixando';
                fileStatusElement.className = 'badge bg-warning';
            }
            
            try {
                // Download single file with progress tracking
                await downloadSingleFileWithProgress(link, fileName, (progress, loaded, total, speed) => {
                    // Check if download was cancelled during progress update
                    if (isBulkDownloadCancelled) {
                        return;
                    }
                    
                    // Update progress for current file
                    const fileProgress = (i / totalFiles) * 100 + (progress / totalFiles);
                    progressElement.style.width = fileProgress + '%';
                    progressPercentElement.textContent = Math.round(fileProgress) + '%';
                    
                    if (speed > 0) {
                        speedElement.textContent = formatSpeed(speed);
                    }
                    
                    totalDownloaded = loaded;
                });
                
                // Check if download was cancelled after file download
                if (isBulkDownloadCancelled) {
                    if (fileStatusElement) {
                        fileStatusElement.textContent = 'Cancelado';
                        fileStatusElement.className = 'badge bg-secondary';
                    }
                    break;
                }
                
                completedFiles++;
                
                // Update file status to completed
                if (fileStatusElement) {
                    fileStatusElement.textContent = 'Concluído';
                    fileStatusElement.className = 'badge bg-success';
                }
                
            } catch (error) {
                if (error.message === 'Download cancelled by user' || isBulkDownloadCancelled) {
                    // Update file status to cancelled
                    if (fileStatusElement) {
                        fileStatusElement.textContent = 'Cancelado';
                        fileStatusElement.className = 'badge bg-secondary';
                    }
                    break;
                }
                
                console.error('Erro ao baixar arquivo:', fileName, error);
                
                // Update file status to error
                if (fileStatusElement) {
                    fileStatusElement.textContent = 'Erro';
                    fileStatusElement.className = 'badge bg-danger';
                }
            }
        }
    } catch (error) {
        console.error('Erro no download em massa:', error);
    }
    
    // Final update
    if (isBulkDownloadCancelled) {
        statusElement.textContent = `Download cancelado! ${completedFiles}/${totalFiles} arquivos baixados antes do cancelamento.`;
        progressElement.classList.remove('progress-bar-animated');
        progressElement.classList.add('bg-warning');
    } else {
        progressElement.style.width = '100%';
        progressPercentElement.textContent = '100%';
        statusElement.textContent = `Download concluído! ${completedFiles}/${totalFiles} arquivos baixados com sucesso.`;
        progressElement.classList.remove('progress-bar-animated');
        progressElement.classList.add('bg-success');
    }
    
    // Restore UI buttons
    startBtn.disabled = false;
    startBtn.innerHTML = '<i class="bi bi-download me-1"></i>Iniciar Downloads';
    cancelBtn.classList.add('d-none');
    closeBtn.classList.remove('d-none');
    
    // Close modal after 3 seconds if not cancelled
    if (!isBulkDownloadCancelled) {
        setTimeout(() => {
            const modal = bootstrap.Modal.getInstance(document.getElementById('bulkDownloadModal'));
            if (modal) {
                modal.hide();
            }
        }, 3000);
    }
}

// Download single file with progress tracking
async function downloadSingleFileWithProgress(url, filename, progressCallback) {
    // Create AbortController for cancellation
    const controller = new AbortController();
    currentBulkDownloadController = controller;
    
    try {
        const response = await fetch(url, {
            signal: controller.signal
        });
        
        if (!response.ok) {
            throw new Error(`HTTP error! status: ${response.status}`);
        }
        
        const contentLength = response.headers.get('content-length');
        const total = parseInt(contentLength, 10);
        let loaded = 0;
        let lastTime = Date.now();
        let lastLoaded = 0;
        
        const reader = response.body.getReader();
        const chunks = [];
        
        while (true) {
            // Check if download was cancelled
            if (controller.signal.aborted || isBulkDownloadCancelled) {
                reader.cancel();
                throw new Error('Download cancelled by user');
            }
            
            const { done, value } = await reader.read();
            
            if (done) break;
            
            chunks.push(value);
            loaded += value.length;
            
            const currentTime = Date.now();
            const timeDiff = currentTime - lastTime;
            
            // Calculate speed and progress every 200ms
            if (timeDiff >= 200) {
                const speed = ((loaded - lastLoaded) / timeDiff) * 1000; // bytes per second
                const progress = total ? (loaded / total) * 100 : 0;
                
                progressCallback(progress, loaded, total, speed);
                
                lastTime = currentTime;
                lastLoaded = loaded;
            }
        }
        
        // Check if download was cancelled before creating blob
        if (controller.signal.aborted || isBulkDownloadCancelled) {
            throw new Error('Download cancelled by user');
        }
        
        // Create blob and download
        const blob = new Blob(chunks);
        const downloadUrl = window.URL.createObjectURL(blob);
        
        const link = document.createElement('a');
        link.href = downloadUrl;
        link.download = filename;
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
        
        // Clean up
        window.URL.revokeObjectURL(downloadUrl);
        
        // Final progress update
        progressCallback(100, loaded, total, 0);
        
    } catch (error) {
        if (error.name === 'AbortError' || error.message === 'Download cancelled by user') {
            throw new Error('Download cancelled by user');
        }
        throw error;
    } finally {
        currentBulkDownloadController = null;
    }
}

// Função para copiar link para clipboard
function copyToClipboard(elementId) {
    const element = document.getElementById(elementId);
    if (element) {
        element.select();
        element.setSelectionRange(0, 99999); // Para mobile
        document.execCommand('copy');
        
        // Feedback visual
        const button = event.target.closest('button');
        if (button) {
            const originalHTML = button.innerHTML;
            button.innerHTML = '<i class="bi bi-check"></i>';
            button.classList.remove('btn-outline-secondary');
            button.classList.add('btn-success');
            
            setTimeout(() => {
                button.innerHTML = originalHTML;
                button.classList.remove('btn-success');
                button.classList.add('btn-outline-secondary');
            }, 2000);
        }
    }
}
function generateCopyFileBox(e, t) {
    return `<div class="row justify-content-center mt-3" id="copyresult">\n  <div class="col-12 col-md-8" id="copystatus"><div class='alert alert-secondary' role='alert'> Enviar solicitação para copiar arquivo </div></div>\n  <div class="col-12 col-md-8"> <input id="user_folder_id" type="text" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${t}" required></div>\n  <div class="col-12 col-md-8 mt-2"> <button id="copy_file" onclick="copyFile('${e}')" style="margin-top: 5px;" class="btn btn-danger btn-block">Copy File to Own Drive</button></div>\n  </div>`
}
function file_others(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    const r = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var s = "", d = "", c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 30 && (p = (p = decodeURIComponent(p)).substring(0, 25) + "..."),
        "" == p && (p = "Home"),
        s += '<a href="' + d + '" class="breadcrumb-item">' + p + "</a>"
    }
    
    // Determinar ícone baseado na extensão do arquivo
    const fileExtension = e.split('.').pop().toLowerCase();
    let fileIcon = 'bi-file-earmark';
    let fileType = 'Arquivo';
    
    switch(fileExtension) {
        case 'zip':
        case 'rar':
        case '7z':
        case 'tar':
        case 'gz':
            fileIcon = 'bi-file-earmark-zip';
            fileType = 'Arquivo Compactado';
            break;
        case 'exe':
        case 'msi':
        case 'deb':
        case 'rpm':
            fileIcon = 'bi-file-earmark-binary';
            fileType = 'Executável';
            break;
        case 'doc':
        case 'docx':
            fileIcon = 'bi-file-earmark-word';
            fileType = 'Documento Word';
            break;
        case 'xls':
        case 'xlsx':
            fileIcon = 'bi-file-earmark-excel';
            fileType = 'Planilha Excel';
            break;
        case 'ppt':
        case 'pptx':
            fileIcon = 'bi-file-earmark-ppt';
            fileType = 'Apresentação PowerPoint';
            break;
        default:
            fileIcon = 'bi-file-earmark';
            fileType = 'Arquivo';
    }
    
    var m = `
    <div class="container-fluid"><br>
      <style>
        .path-navigation-container {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
        }
        [data-theme="dark"] .path-navigation-container {
          background: rgba(255,255,255,0.05);
          border-left-color: #0d6efd;
        }
        .path-navigation-container:hover {
          background: rgba(0,0,0,0.04);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        [data-theme="dark"] .path-navigation-container:hover {
          background: rgba(255,255,255,0.08);
        }
        .breadcrumb {
          margin-bottom: 0;
          background: transparent;
          padding: 0;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #007bff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        [data-theme="dark"] .breadcrumb-item a {
          color: #0d6efd;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          transform: translateX(2px);
        }
        [data-theme="dark"] .breadcrumb-item a:hover {
          color: #3d8bfd;
        }
        .breadcrumb-item.active {
          color: #6c757d;
          font-weight: 500;
        }
        [data-theme="dark"] .breadcrumb-item.active {
          color: #adb5bd;
        }
      </style>
      <div class="path-navigation-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">
            <li class="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house-door me-1"></i>
                <span>Início</span>
              </a>
            </li>
            ${s}
          </ol>
        </nav>
      </div>
      
      <!-- File Viewer Container -->
      <div class="card">
        <!-- File Toolbar -->
        <div class="card-header bg-primary text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="mb-0"><i class="bi ${fileIcon} me-2"></i>${e}</h5>
              <small>${n} • ${fileType}</small>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <!-- Download Button -->
                <button type="button" class="btn btn-outline-light btn-sm" onclick="initiateDownload('${e}', '${a}', '${n}')" title="Baixar arquivo">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- File Content -->
        <div class="card-body p-0" style="background-color: #f8f9fa;">
          <div class="d-flex justify-content-center align-items-center" style="min-height: 400px;">
            <div class="text-center">
              <i class="bi ${fileIcon} text-muted" style="font-size: 4rem;"></i>
              <p class="text-muted mt-3">${fileType}</p>
              <p class="text-muted">Este tipo de arquivo não pode ser visualizado no navegador</p>
            </div>
          </div>
        </div>
        
        <!-- File Actions -->
        <div class="card-footer">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                <input type="text" class="form-control" id="dlurl" value="${a}" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('dlurl')" title="Copiar link">
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-primary" onclick="initiateDownload('${e}', '${a}', '${n}')" title="Baixar arquivo">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-gear"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Downloaders</h6></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="${a}" target="_blank"><i class="bi bi-box-arrow-up-right me-2"></i>Google Drive</a></li>
                  </ul>
                </div>
                ${r}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    $("#content").html(m)
}
function file_code(name, encodedName, size, downloadUrl, id, rootId) {
    var type = {
        "html": "html",
        "php": "php",
        "css": "css",
        "go": "golang",
        "java": "java",
        "js": "javascript",
        "json": "json",
        "txt": "Text",
        "sh": "sh",
        "md": "Markdown",
    };
    var ext = name.split('.').pop().toLowerCase();
    var url = UI.second_domain_for_dl ? UI.downloaddomain + downloadUrl : 
              (downloadUrl.startsWith('http') ? downloadUrl : window.location.origin + downloadUrl);
    
    // Generate breadcrumb
    var l = window.location.pathname.split("/");
    var s = "", d = "";
    for (var c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 30 && (p = (p = decodeURIComponent(p)).substring(0, 25) + "..."),
        "" == p && (p = "Home"),
        s += '<li class="breadcrumb-item"><a href="' + d + '">' + p + "</a></li>"
    }
    
    $.get(downloadUrl, function(data) {
        try {
            var size = formatFileSize(size);
            var content = '<link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/themes/prism-twilight.css" integrity="sha256-Rl83wx+fN2p2ioYpdvpWxuhAbxj+/7IwaZrKQBu/KQE=" crossorigin="anonymous">' +
'<div class="container-fluid"><br>' +
'  <style>' +
'    .path-navigation-container {' +
'      margin-bottom: 1rem;' +
'      padding: 0.75rem 1rem;' +
'      background: rgba(0,0,0,0.02);' +
'      border-radius: 8px;' +
'      border-left: 4px solid #007bff;' +
'      transition: all 0.3s ease;' +
'    }' +
'    [data-theme="dark"] .path-navigation-container {' +
'      background: rgba(255,255,255,0.05);' +
'      border-left-color: #0d6efd;' +
'    }' +
'    .path-navigation-container:hover {' +
'      background: rgba(0,0,0,0.04);' +
'      box-shadow: 0 2px 4px rgba(0,0,0,0.05);' +
'    }' +
'    [data-theme="dark"] .path-navigation-container:hover {' +
'      background: rgba(255,255,255,0.08);' +
'    }' +
'    .breadcrumb {' +
'      margin-bottom: 0;' +
'      background: transparent;' +
'      padding: 0;' +
'    }' +
'    .breadcrumb-item a {' +
'      text-decoration: none;' +
'      color: #007bff;' +
'      transition: all 0.2s ease;' +
'      display: inline-flex;' +
'      align-items: center;' +
'    }' +
'    [data-theme="dark"] .breadcrumb-item a {' +
'      color: #0d6efd;' +
'    }' +
'    .breadcrumb-item a:hover {' +
'      color: #0056b3;' +
'      transform: translateX(2px);' +
'    }' +
'    [data-theme="dark"] .breadcrumb-item a:hover {' +
'      color: #3d8bfd;' +
'    }' +
'    .breadcrumb-item.active {' +
'      color: #6c757d;' +
'      font-weight: 500;' +
'    }' +
'    [data-theme="dark"] .breadcrumb-item.active {' +
'      color: #adb5bd;' +
'    }' +
'  </style>' +
'  <div class="path-navigation-container">' +
'    <nav aria-label="breadcrumb">' +
'      <ol class="breadcrumb" style="--bs-breadcrumb-divider: \'›\'; --bs-breadcrumb-item-padding-x: 0.5rem;">' +
'        <li class="breadcrumb-item">' +
'          <a href="/">' +
'            <i class="bi bi-house-door me-1"></i>' +
'            <span>Início</span>' +
'          </a>' +
'        </li>' +
        s +
'      </ol>' +
'    </nav>' +
'  </div>' +
'  <div class="card">' +
'    <div class="card-header bg-primary text-white">' +
'      <div class="row align-items-center">' +
'        <div class="col-md-6">' +
'          <h5 class="mb-0"><i class="bi bi-file-text me-2"></i>' + name + '</h5>' +
'          <small>' + size + ' • ' + (type[ext] || 'Text') + '</small>' +
'        </div>' +
'        <div class="col-md-6">' +
'          <div class="d-flex justify-content-end align-items-center">' +
'            <button id="copy-code" class="btn btn-outline-light btn-sm" title="Copiar código">' +
'              <i class="bi bi-clipboard"></i>' +
'            </button>' +
'          </div>' +
'        </div>' +
'      </div>' +
'    </div>' +
'    <div class="card-body p-0" style="background-color: #2d3748;">' +
'      <div id="code-container" style="max-height: 600px; overflow: auto;">' +
'        <pre class="line-numbers language-' + (type[ext] || 'Text') + '" style="white-space: pre-wrap; margin: 0; padding: 1rem; background: transparent;"><code id="editor">' + $('<div/>').text(data).html() + '</code></pre>' +
'      </div>' +
'    </div>' +
'    <div class="card-footer">' +
'      <div class="row">' +
'        <div class="col-md-8">' +
'          <div class="input-group">' +
'            <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>' +
'            <input type="text" class="form-control" id="dlurl" value="' + url + '" readonly>' +
'            <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard(\'dlurl\')" title="Copiar link">' +
'              <i class="bi bi-clipboard"></i>' +
'            </button>' +
'          </div>' +
'        </div>' +
'        <div class="col-md-4">' +
'          <div class="d-flex justify-content-end gap-2">' +
'            <button class="btn btn-primary" title="Baixar arquivo" onclick="initiateDownload(\'' + name + '\', \'' + url + '\', \'' + size + '\')">' +
'              <i class="bi bi-download me-1"></i>Baixar' +
'            </button>' +
'            <div class="dropdown">' +
'              <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">' +
'                <i class="bi bi-gear"></i>' +
'              </button>' +
'              <ul class="dropdown-menu">' +
'                <li><h6 class="dropdown-header">Downloaders</h6></li>' +
'                <li><a class="dropdown-item" href="intent:' + url + '#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=' + encodedName + ';end"><i class="bi bi-download me-2"></i>1DM (Free)</a></li>' +
'                <li><a class="dropdown-item" href="intent:' + url + '#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=' + encodedName + ';end"><i class="bi bi-download me-2"></i>1DM (Lite)</a></li>' +
'                <li><a class="dropdown-item" href="intent:' + url + '#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=' + encodedName + ';end"><i class="bi bi-download me-2"></i>1DM+ (Plus)</a></li>' +
                (UI.display_drive_link ? '<li><hr class="dropdown-divider"></li><li><a class="dropdown-item" href="https://drive.google.com/file/d/' + id + '/view" target="_blank"><i class="bi bi-google me-2"></i>Google Drive</a></li>' : '') +
'              </ul>' +
'            </div>' +
'            <button onclick="copyFunction()" onmouseout="outFunc()" class="btn btn-success"> <span class="tooltiptext" id="myTooltip">Copiar</span> </button>' +
'          </div>' +
'        </div>' +
'      </div>' +
'    </div>' +
'  </div>' +
'</div>' +
'<script src="https://cdn.jsdelivr.net/npm/prismjs@1.23.0/prism.js" integrity="sha256-fZOd7N/oofoKcO92RzxvC0wMm+EvsKyRT4nmcmQbgzU=" crossorigin="anonymous"></script>' +
'<script>' +
'  document.getElementById("copy-code").addEventListener("click", function() {' +
'    const code = document.getElementById("editor").textContent;' +
'    navigator.clipboard.writeText(code).then(function() {' +
'      const btn = document.getElementById("copy-code");' +
'      const originalHTML = btn.innerHTML;' +
'      btn.innerHTML = "<i class=\\"bi bi-check\\"></i>";' +
'      btn.classList.remove("btn-outline-light");' +
'      btn.classList.add("btn-success");' +
'      setTimeout(() => {' +
'        btn.innerHTML = originalHTML;' +
'        btn.classList.remove("btn-success");' +
'        btn.classList.add("btn-outline-light");' +
'      }, 2000);' +
'    });' +
'  });' +
'</script>';
        } catch (err) {
            var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`
        }
        $('#content').html(content);
    }).fail(function() {
        var content = `
<div class="container"><br>
<div class="card text-center">
    <div class="card-body text-center">
      <div class="${UI.file_view_alert_class}" id="file_details" role="alert"><b>404.</b> That’s an error.</div>
    </div><p>The requested URL was not found on this server. That’s all we know.</p>
      <div class="card-text text-center">
      <div class="btn-group text-center">
        <a href="/" type="button" class="btn btn-primary">Homepage</a>
      </div>
        </div><br>
</div>
</div>`;
        $('#content').html(content);
    });
}
function file_video_old(e, t, n, a, i, o, l, r) {
    var s = btoa(i)
      , d = window.location.pathname.split("/");
    const c = UI.allow_file_copy ? generateCopyFileBox(l, r) : "";
    for (var p = "", m = "", g = 0; g < d.length; g++) {
        var f = d[g];
        g == d.length - 1 ? m += f + "?a=view" : m += f + "/",
        f.length > 30 && (f = (f = decodeURIComponent(f)).substring(0, 25) + "..."),
        "" == f && (f = "Home"),
        p += '<a href="' + m + '" class="breadcrumb-item">' + f + "</a>"
    }
    let v;
    UI.disable_player || ("plyr" == player_config.player ? (v = `<video id="player" playsinline controls data-poster="${a}">\n      <source src="${i}" type="video/mp4" />\n      <source src="${i}" type="video/webm" />\n        </video>`,
    player_js = "https://cdn.plyr.io/" + player_config.plyr_io_version + "/plyr.polyfilled.js",
    player_css = "https://cdn.plyr.io/" + player_config.plyr_io_version + "/plyr.css") : "videojs" == player_config.player ? (v = `<video id="vplayer" poster="${a}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true, "playbackRates": [0.5, 1, 1.5, 2]}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">\n      <source src="${i}" type="video/mp4" />\n      <source src="${i}" type="video/webm" />\n      <source src="${i}" type="video/avi" />\n    </video>`,
    player_js = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video.js",
    player_css = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video-js.css") : "dplayer" == player_config.player ? (v = '<div id="player-container"></div>',
    player_js = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js",
    player_css = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css") : "jwplayer" == player_config.player && (v = '<div id="player"></div>',
    player_js = "https://content.jwplatform.com/libraries/IDzF9Zmk.js",
    player_css = ""));
    var u = `\n    <div class="container text-center"><br>\n      <nav aria-label="breadcrumb">\n        <ol class="breadcrumb">\n          ${p}\n        </ol>\n      </nav>\n      <div class="card text-center">\n        <div class="text-center">\n          <div class="${UI.file_view_alert_class}" id="file_details" role="alert">${e}<br>${n}</div>${v}</div>\n        </br>\n        ${UI.disable_video_download ? "" : `\n          <div class="card-body">\n          <div class="input-group mb-4">\n          <input type="text" class="form-control" id="dlurl" value="${i}" readonly>\n          </div>\n          <div class="btn-group text-center">\n              <button type="button" class="btn btn-primary" onclick="initiateDownload('${e}', '${i}', '${n}')">Baixar</button>\n              <button type="button" class="btn btn-primary dropdown-toggle dropdown-toggle-split" data-bs-toggle="dropdown" aria-haspopup="true" aria-expanded="false">\n              <span class="sr-only"></span>\n              </button>\n              <div class="dropdown-menu">\n              <a class="dropdown-item" href="iina://weblink?url=${i}">IINA</a>\n              <a class="dropdown-item" href="potplayer://${i}">PotPlayer</a>\n              <a class="dropdown-item" href="vlc://${i}">VLC Mobile</a>\n              <a class="dropdown-item" href="${i}">VLC Desktop</a>\n              <a class="dropdown-item" href="nplayer-${i}">nPlayer</a>\n              <a class="dropdown-item" href="intent://${i}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;">mpv-android</a>\n              <a class="dropdown-item" href="mpv://${s}">mpv x64</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end">MX Player (Free)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end">MX Player (Pro)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a>\n              <a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a>\n              </div>\n          </div>\n          ` + copyButton + c + "\n\n          </div>\n          </div>\n          "}\n      </div>\n    </div>\n  `;
    $("#content").html(u);
    var h = document.createElement("script");
    h.src = player_js,
    h.onload = function() {
        if ("plyr" == player_config.player) {
            const player = new Plyr("#player", {
                controls: [
                    'play-large',
                    'restart',
                    'rewind',
                    'play',
                    'fast-forward',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    'settings',
                    'fullscreen'
                ],
                settings: ['quality', 'speed'],
                speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    player.fullscreen.enter();
                });
            }
            
        } else if ("videojs" == player_config.player) {
            const player = new videojs("vplayer", {
                playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                fluid: true,
                responsive: true,
                controls: true,
                preload: 'auto'
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    if (player.isFullscreen()) {
                        player.exitFullscreen();
                    } else {
                        player.requestFullscreen();
                    }
                });
            }
            
        } else if ("dplayer" == player_config.player) {
            const dp = new DPlayer({
                container: document.getElementById("player-container"),
                screenshot: true,
                video: {
                    url: i,
                    pic: a,
                    thumbnails: a
                }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    dp.fullScreen.request('browser');
                });
            }
            
        } else if ("jwplayer" == player_config.player) {
            jwplayer("player").setup({
                file: i,
                type: o,
                autostart: false,
                image: a,
                width: "100%",
                aspectratio: "16:9",
                title: e,
                description: "nuvem.me",
                tracks: [{
                    file: i,
                    kind: "captions",
                    label: "Default",
                    default: true
                }],
                captions: {
                    color: "#f3f378",
                    fontSize: 14,
                    backgroundOpacity: 50,
                    edgeStyle: "raised"
                }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    jwplayer("player").setFullscreen(true);
                });
            }
        }
        
        // Download button functionality
        const downloadBtn = document.getElementById('download-video');
        if (downloadBtn) {
            downloadBtn.addEventListener('click', () => {
                // Get video filename from URL
                const videoFileName = i.split('/').pop() || 'video.mp4';
                // Use the download modal
                initiateDownload(videoFileName, i, n);
            });
        }
    }
    ,
    document.head.appendChild(h);
    var y = document.createElement("link");
    y.href = player_css,
    y.rel = "stylesheet",
    document.head.appendChild(y)
}

function file_video(e, t, n, a, i, o, l, r) {
    var s = btoa(i)
      , d = window.location.pathname.split("/");
    const c = UI.allow_file_copy ? generateCopyFileBox(l, r) : "";
    for (var p = "", m = "", g = 0; g < d.length; g++) {
        var f = d[g];
        g == d.length - 1 ? m += f + "?a=view" : m += f + "/",
        f.length > 30 && (f = (f = decodeURIComponent(f)).substring(0, 25) + "..."),
        "" == f && (f = "Home"),
        p += '<a href="' + m + '" class="breadcrumb-item">' + f + "</a>"
    }
    
    let v;
    UI.disable_player || ("plyr" == player_config.player ? (v = `<video id="player" playsinline controls data-poster="${a}">
      <source src="${i}" type="video/mp4" />
      <source src="${i}" type="video/webm" />
        </video>`,
    "/plyr.polyfilled.js",
    player_css = "https://cdn.plyr.io/" + player_config.plyr_io_version + "/plyr.css") : "videojs" == player_config.player ? (v = `<video id="vplayer" poster="${a}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true, "playbackRates": [0.5, 1, 1.5, 2]}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
      <source src="${i}" type="video/mp4" />
      <source src="${i}" type="video/webm" />
      <source src="${i}" type="video/avi" />
    </video>`,
    player_js = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video.js",
    player_css = "https://vjs.zencdn.net/" + player_config.videojs_version + "/video-js.css") : "dplayer" == player_config.player ? (v = '<div id="player-container"></div>',
    player_js = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.js",
    player_css = "https://cdn.jsdelivr.net/npm/dplayer/dist/DPlayer.min.css") : "jwplayer" == player_config.player && (v = '<div id="player"></div>',
    player_js = "https://content.jwplatform.com/libraries/IDzF9Zmk.js",
    player_css = ""));
    
    var u = `
    <div class="container-fluid"><br>
      <style>
        .path-navigation-container {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
        }
        [data-theme="dark"] .path-navigation-container {
          background: rgba(255,255,255,0.05);
          border-left-color: #0d6efd;
        }
        .path-navigation-container:hover {
          background: rgba(0,0,0,0.04);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        [data-theme="dark"] .path-navigation-container:hover {
          background: rgba(255,255,255,0.08);
        }
        .breadcrumb {
          margin-bottom: 0;
          background: transparent;
          padding: 0;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #007bff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        [data-theme="dark"] .breadcrumb-item a {
          color: #0d6efd;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          transform: translateX(2px);
        }
        [data-theme="dark"] .breadcrumb-item a:hover {
          color: #3d8bfd;
        }
        .breadcrumb-item.active {
          color: #6c757d;
          font-weight: 500;
        }
        [data-theme="dark"] .breadcrumb-item.active {
          color: #adb5bd;
        }
      </style>
      <div class="path-navigation-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">
            <li class="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house-door me-1"></i>
                <span>Início</span>
              </a>
            </li>
            ${p}
          </ol>
        </nav>
      </div>
      
      <!-- Video Player Container -->
      <div class="card">
        <!-- Video Header -->
        <div class="card-header bg-primary text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="mb-0"><i class="bi bi-play-circle me-2"></i>${e}</h5>
              <small>${n}</small>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <!-- Fullscreen Toggle -->
                <button id="fullscreen-video" class="btn btn-outline-light btn-sm" title="Tela cheia">
                  <i class="bi bi-fullscreen"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video Player -->
        <div class="card-body p-0" style="background-color: #000;">
          <div id="video-container" class="d-flex justify-content-center" style="min-height: 500px;">
            <div class="video-wrapper" style="position: relative; width: 100%; height: 0; padding-bottom: 56.25%; background: #000;">
              <div style="position: absolute; top: 0; left: 0; width: 100%; height: 100%;">
                ${v}
              </div>
            </div>
          </div>
        </div>
        
        <!-- Video Actions -->
        <div class="card-footer">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                <input type="text" class="form-control" id="dlurl" value="${i}" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('dlurl')" title="Copiar link">
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-primary" title="Baixar vídeo" onclick="initiateDownload('${e}', '${i}', '${n}')">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-gear"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Players Desktop</h6></li>
                    <li><a class="dropdown-item" href="iina://weblink?url=${i}"><i class="bi bi-play-circle me-2"></i>IINA</a></li>
                    <li><a class="dropdown-item" href="potplayer://${i}"><i class="bi bi-play-circle me-2"></i>PotPlayer</a></li>
                    <li><a class="dropdown-item" href="vlc://${i}"><i class="bi bi-play-circle me-2"></i>VLC Desktop</a></li>
                    <li><a class="dropdown-item" href="mpv://${s}"><i class="bi bi-play-circle me-2"></i>mpv x64</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><h6 class="dropdown-header">Players Mobile</h6></li>
                    <li><a class="dropdown-item" href="vlc://${i}"><i class="bi bi-phone me-2"></i>VLC Mobile</a></li>
                    <li><a class="dropdown-item" href="nplayer-${i}"><i class="bi bi-phone me-2"></i>nPlayer</a></li>
                    <li><a class="dropdown-item" href="intent://${i}#Intent;type=video/any;package=is.xyz.mpv;scheme=https;end;"><i class="bi bi-phone me-2"></i>mpv-android</a></li>
                    <li><a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end"><i class="bi bi-phone me-2"></i>MX Player (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${i}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end"><i class="bi bi-phone me-2"></i>MX Player (Pro)</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><h6 class="dropdown-header">Downloaders</h6></li>
                    <li><a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end"><i class="bi bi-download me-2"></i>1DM (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${i}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end"><i class="bi bi-download me-2"></i>1DM (Lite)</a></li>
                    <li><a class="dropdown-item" href="intent://${i}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end"><i class="bi bi-download me-2"></i>1DM+ (Plus)</a></li>
                  </ul>
                </div>
                ${copyButton}${c}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>
      .video-wrapper {
        border-radius: 8px;
        overflow: hidden;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.3);
      }
      
      .card {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: none;
      }
      
      .card-header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      .btn-outline-light:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
      }
      
      .dropdown-menu {
        max-height: 400px;
        overflow-y: auto;
      }
      
      .dropdown-header {
        font-size: 0.75rem;
        font-weight: 600;
        color: #6c757d;
        text-transform: uppercase;
        letter-spacing: 0.5px;
      }
      
      .dropdown-item {
        padding: 0.5rem 1rem;
      }
      
      .dropdown-item i {
        width: 16px;
        text-align: center;
      }
      
      @media (max-width: 768px) {
        .card-header .row {
          flex-direction: column;
          gap: 10px;
        }
        
        .card-header .col-md-6:last-child {
          justify-content: center !important;
        }
      }
      
      /* Video player customizations */
      .video-js {
        border-radius: 8px;
      }
      
      .plyr {
        border-radius: 8px;
      }
      
      #player-container {
        border-radius: 8px;
        overflow: hidden;
      }
    </style>
  `;
    $("#content").html(u);
    
    // Video player functionality
    var h = document.createElement("script");
    h.src = player_js,
    h.onload = function() {
        if ("plyr" == player_config.player) {
            const player = new Plyr("#player", {
                controls: [
                    'play-large',
                    'restart',
                    'rewind',
                    'play',
                    'fast-forward',
                    'progress',
                    'current-time',
                    'duration',
                    'mute',
                    'volume',
                    'settings',
                    'fullscreen'
                ],
                settings: ['quality', 'speed'],
                speed: { selected: 1, options: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2] }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    player.fullscreen.enter();
                });
            }
            
        } else if ("videojs" == player_config.player) {
            const player = new videojs("vplayer", {
                playbackRates: [0.5, 0.75, 1, 1.25, 1.5, 1.75, 2],
                fluid: true,
                responsive: true,
                controls: true,
                preload: 'auto'
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    if (player.isFullscreen()) {
                        player.exitFullscreen();
                    } else {
                        player.requestFullscreen();
                    }
                });
            }
            
        } else if ("dplayer" == player_config.player) {
            const dp = new DPlayer({
                container: document.getElementById("player-container"),
                screenshot: true,
                video: {
                    url: i,
                    pic: a,
                    thumbnails: a
                }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    dp.fullScreen.request('browser');
                });
            }
            
        } else if ("jwplayer" == player_config.player) {
            jwplayer("player").setup({
                file: i,
                type: o,
                autostart: false,
                image: a,
                width: "100%",
                aspectratio: "16:9",
                title: e,
                description: "Powered by Google Drive Index",
                tracks: [{
                    file: i,
                    kind: "captions",
                    label: "Default",
                    default: true
                }],
                captions: {
                    color: "#f3f378",
                    fontSize: 14,
                    backgroundOpacity: 50,
                    edgeStyle: "raised"
                }
            });
            
            // Fullscreen button functionality
            const fullscreenBtn = document.getElementById('fullscreen-video');
            if (fullscreenBtn) {
                fullscreenBtn.addEventListener('click', () => {
                    jwplayer("player").setFullscreen(true);
                });
            }
        }
};
    
    document.head.appendChild(h);
    var y = document.createElement("link");
    y.href = player_css,
    y.rel = "stylesheet",
    document.head.appendChild(y);
}

function file_audio(e, t, n, a, i, o) {
    var l = btoa(a)
      , r = window.location.pathname.split("/");
    const s = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var d = "", c = "", p = 0; p < r.length; p++) {
        var m = r[p];
        p == r.length - 1 ? c += m + "?a=view" : c += m + "/",
        m.length > 30 && (m = (m = decodeURIComponent(m)).substring(0, 25) + "..."),
        "" == m && (m = "Home"),
        d += '<a href="' + c + '" class="breadcrumb-item">' + m + "</a>"
    }
    var g = `
    <div class="container-fluid"><br>
      <style>
        .path-navigation-container {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
        }
        [data-theme="dark"] .path-navigation-container {
          background: rgba(255,255,255,0.05);
          border-left-color: #0d6efd;
        }
        .path-navigation-container:hover {
          background: rgba(0,0,0,0.04);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        [data-theme="dark"] .path-navigation-container:hover {
          background: rgba(255,255,255,0.08);
        }
        .breadcrumb {
          margin-bottom: 0;
          background: transparent;
          padding: 0;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #007bff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        [data-theme="dark"] .breadcrumb-item a {
          color: #0d6efd;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          transform: translateX(2px);
        }
        [data-theme="dark"] .breadcrumb-item a:hover {
          color: #3d8bfd;
        }
        .breadcrumb-item.active {
          color: #6c757d;
          font-weight: 500;
        }
        [data-theme="dark"] .breadcrumb-item.active {
          color: #adb5bd;
        }
      </style>
      <div class="path-navigation-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">
            <li class="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house-door me-1"></i>
                <span>Início</span>
              </a>
            </li>
            ${d}
          </ol>
        </nav>
      </div>
      
      <!-- Audio Player Container -->
      <div class="card">
        <!-- Audio Toolbar -->
        <div class="card-header bg-primary text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="mb-0"><i class="bi bi-music-note me-2"></i>${e}</h5>
              <small>${n}</small>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <!-- Download Button -->
                <button type="button" class="btn btn-outline-light btn-sm" onclick="initiateDownload('${e}', '${a}', '${n}')" title="Baixar áudio">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Audio Player -->
        <div class="card-body p-0" style="background-color: #f8f9fa;">
          <div class="d-flex justify-content-center align-items-center" style="min-height: 400px;">
            ${UI.disable_player ? `
              <div class="text-center">
                <i class="bi bi-music-note-beamed text-muted" style="font-size: 4rem;"></i>
                <p class="text-muted mt-3">Player de áudio desabilitado</p>
              </div>
            ` : `
              <video id="aplayer" poster="${UI.audioposter}" muted=true class="video-js vjs-default-skin" controls preload="auto" width="100%" height="100%" data-setup='{"fluid": true, "playbackRates": [0.5, 1, 1.5, 2]}' style="--plyr-captions-text-color: #ffffff;--plyr-captions-background: #000000;">
                <source src="${a}" type="audio/mpeg" />
                <source src="${a}" type="audio/ogg" />
                <source src="${a}" type="audio/wav" />
              </video>
            `}
          </div>
        </div>
        
        <!-- Audio Actions -->
        <div class="card-footer">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                <input type="text" class="form-control" id="dlurl" value="${a}" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('dlurl')" title="Copiar link">
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-primary" onclick="initiateDownload('${e}', '${a}', '${n}')" title="Baixar áudio">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-gear"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Players</h6></li>
                    <li><a class="dropdown-item" href="iina://weblink?url=${a}"><i class="bi bi-play-circle me-2"></i>IINA</a></li>
                    <li><a class="dropdown-item" href="potplayer://${a}"><i class="bi bi-play-circle me-2"></i>PotPlayer</a></li>
                    <li><a class="dropdown-item" href="vlc://${a}"><i class="bi bi-play-circle me-2"></i>VLC Mobile</a></li>
                    <li><a class="dropdown-item" href="${a}"><i class="bi bi-play-circle me-2"></i>VLC Desktop</a></li>
                    <li><a class="dropdown-item" href="nplayer-${a}"><i class="bi bi-play-circle me-2"></i>nPlayer</a></li>
                    <li><a class="dropdown-item" href="intent://${a}#Intent;type=audio/any;package=is.xyz.mpv;scheme=https;end;"><i class="bi bi-play-circle me-2"></i>mpv-android</a></li>
                    <li><a class="dropdown-item" href="mpv://${l}"><i class="bi bi-play-circle me-2"></i>mpv x64</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;package=com.mxtech.videoplayer.ad;S.title=${t};end"><i class="bi bi-play-circle me-2"></i>MX Player (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;package=com.mxtech.videoplayer.pro;S.title=${t};end"><i class="bi bi-play-circle me-2"></i>MX Player (Pro)</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><h6 class="dropdown-header">Downloaders</h6></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a></li>
                    <li><a class="dropdown-item" href="intent://${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="${a}" target="_blank"><i class="bi bi-box-arrow-up-right me-2"></i>Google Drive</a></li>
                  </ul>
                </div>
                ${s}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    $("#content").html(g);
    var f = document.createElement("script");
    f.src = "https://vjs.zencdn.net/" + UI.videojs_version + "/video.min.js",
    f.onload = function() {
        videojs("aplayer", {
			playbackRates: [0.5, 1, 1.5, 2]
		  })
    }
    ,
    document.head.appendChild(f);
    var v = document.createElement("link");
    v.href = "https://vjs.zencdn.net/" + UI.videojs_version + "/video-js.css",
    v.rel = "stylesheet",
    document.head.appendChild(v)
}

function gdidecode(str) {
    var gdijsorg_0x5579 = ['join', 'toString', '114773LJlqPi', 'charCodeAt', '1evaKJu', '128429mQiVMM', '179727icrnig', '1276161MsgKkV', 'map', '111987FmCZVm', '6IEPbgT', '1924817UdCjIN', '328673bHHLnC', '14sGLkvR'];
    var gdijsorg_0x22bf03 = gdijsorg_0x47d3;
    (function(_0x2015a9, _0x2d2e6f) {
        var _0x194131 = gdijsorg_0x47d3;
        while (!![]) {
            try {
                var _0x50490c = parseInt(_0x194131(0x167)) * -parseInt(_0x194131(0x165)) + parseInt(_0x194131(0x160)) + parseInt(_0x194131(0x15e)) + -parseInt(_0x194131(0x161)) * -parseInt(_0x194131(0x15f)) + parseInt(_0x194131(0x162)) * -parseInt(_0x194131(0x168)) + -parseInt(_0x194131(0x16a)) + parseInt(_0x194131(0x169));
                if (_0x50490c === _0x2d2e6f) break;
                else _0x2015a9['push'](_0x2015a9['shift']());
            } catch (_0x157d6c) {
                _0x2015a9['push'](_0x2015a9['shift']());
            }
        }
    }(gdijsorg_0x5579, 0xf40cd));

    function gdijsorg_0x47d3(_0x4aefd5, _0x2d1551) {
        _0x4aefd5 = _0x4aefd5 - 0x15e;
        var _0x557938 = gdijsorg_0x5579[_0x4aefd5];
        return _0x557938;
    }
    return decodeURIComponent(atob(str)['split']('')[gdijsorg_0x22bf03(0x16b)](function(_0x1cdc7a) {
        var _0x416153 = gdijsorg_0x22bf03;
        return '%' + ('00' + _0x1cdc7a[_0x416153(0x166)](0x0)[_0x416153(0x164)](0x10))['slice'](-0x2);
    })[gdijsorg_0x22bf03(0x163)](''));
}

function read(str) {
    var gdijsorg_0x1207 = ['join', '645298GrGsiK', '8269zzjDhb', '28wpErfD', '11eoSBcm', '3578714TboDnQ', 'slice', '52214BJnTpj', '14039GFHzjM', '187451gnBzKk', 'substr', 'reverse', '1262156NwMIzh', '2nDedhJ', 'split'];
    var gdijsorg_0x570bf1 = gdijsorg_0x158f;

    function gdijsorg_0x158f(_0x32bcea, _0x29ebfd) {
        _0x32bcea = _0x32bcea - 0x150;
        var _0x1207c1 = gdijsorg_0x1207[_0x32bcea];
        return _0x1207c1;
    }(function(_0xbbe83c, _0xbbffd8) {
        var _0x2feec5 = gdijsorg_0x158f;
        while (!![]) {
            try {
                var _0x5d3639 = parseInt(_0x2feec5(0x15c)) * -parseInt(_0x2feec5(0x150)) + -parseInt(_0x2feec5(0x15b)) + -parseInt(_0x2feec5(0x157)) + parseInt(_0x2feec5(0x151)) * parseInt(_0x2feec5(0x152)) + parseInt(_0x2feec5(0x153)) * -parseInt(_0x2feec5(0x156)) + parseInt(_0x2feec5(0x158)) + parseInt(_0x2feec5(0x154));
                if (_0x5d3639 === _0xbbffd8) break;
                else _0xbbe83c['push'](_0xbbe83c['shift']());
            } catch (_0x2894d2) {
                _0xbbe83c['push'](_0xbbe83c['shift']());
            }
        }
    }(gdijsorg_0x1207, 0xd11e8));
    var sa = str[gdijsorg_0x570bf1(0x15d)](''),
        ra = sa[gdijsorg_0x570bf1(0x15a)](),
        ja = ra[gdijsorg_0x570bf1(0x15e)](''),
        aj = ja[gdijsorg_0x570bf1(0x159)](0x18)[gdijsorg_0x570bf1(0x155)](0x0, -0x14);
    return aj;
}

function file_pdf(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    const r = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var s = "", d = "", c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 30 && (p = (p = decodeURIComponent(p)).substring(0, 25) + "..."),
        "" == p && (p = "Home"),
        s += '<a href="' + d + '" class="breadcrumb-item">' + p + "</a>"
    }
    
    var m = `
    <div class="container-fluid"><br>
      <style>
        .path-navigation-container {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
        }
        [data-theme="dark"] .path-navigation-container {
          background: rgba(255,255,255,0.05);
          border-left-color: #0d6efd;
        }
        .path-navigation-container:hover {
          background: rgba(0,0,0,0.04);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        [data-theme="dark"] .path-navigation-container:hover {
          background: rgba(255,255,255,0.08);
        }
        .breadcrumb {
          margin-bottom: 0;
          background: transparent;
          padding: 0;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #007bff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        [data-theme="dark"] .breadcrumb-item a {
          color: #0d6efd;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          transform: translateX(2px);
        }
        [data-theme="dark"] .breadcrumb-item a:hover {
          color: #3d8bfd;
        }
        .breadcrumb-item.active {
          color: #6c757d;
          font-weight: 500;
        }
        [data-theme="dark"] .breadcrumb-item.active {
          color: #adb5bd;
        }
      </style>
      <div class="path-navigation-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">
            <li class="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house-door me-1"></i>
                <span>Início</span>
              </a>
            </li>
            ${s}
          </ol>
        </nav>
      </div>
      
      <!-- PDF Viewer Container -->
      <div class="card">
        <!-- PDF Toolbar -->
        <div class="card-header bg-primary text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="mb-0"><i class="bi bi-file-pdf me-2"></i>${e}</h5>
              <small>${n}</small>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <!-- Zoom Controls -->
                <div class="btn-group me-2" role="group">
                  <button id="zoom-out" class="btn btn-outline-light btn-sm" title="Diminuir zoom">
                    <i class="bi bi-zoom-out"></i>
                  </button>
                  <button id="zoom-reset" class="btn btn-outline-light btn-sm" title="Zoom padrão">
                    <i class="bi bi-zoom-in"></i>
                  </button>
                  <button id="zoom-in" class="btn btn-outline-light btn-sm" title="Aumentar zoom">
                    <i class="bi bi-zoom-in"></i>
                  </button>
                </div>
                
                <!-- Page Controls -->
                <div class="btn-group me-2" role="group">
                  <button id="prev" class="btn btn-outline-light btn-sm" title="Página anterior">
                    <i class="bi bi-chevron-left"></i>
                  </button>
                  <button id="next" class="btn btn-outline-light btn-sm" title="Próxima página">
                    <i class="bi bi-chevron-right"></i>
                  </button>
                </div>
                
                <!-- Page Info -->
                <div class="text-light me-2">
                  <span id="page_num">1</span> / <span id="page_count">1</span>
                </div>
                
                <!-- Fullscreen Toggle -->
                <button id="fullscreen-toggle" class="btn btn-outline-light btn-sm" title="Tela cheia">
                  <i class="bi bi-fullscreen"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- PDF Canvas Container -->
        <div class="card-body p-0" style="background-color: #f8f9fa;">
          <div id="pdf-container" class="d-flex justify-content-center" style="min-height: 600px; overflow: auto;">
            <div id="pdf-loading" class="d-flex align-items-center justify-content-center" style="height: 400px;">
              <div class="text-center">
                <div class="spinner-border text-primary" role="status">
                  <span class="visually-hidden">Carregando PDF...</span>
                </div>
                <p class="mt-2">Carregando PDF...</p>
              </div>
            </div>
            <canvas id="the-canvas" class="shadow" style="max-width: 100%; display: none;"></canvas>
          </div>
        </div>
        
        <!-- PDF Actions -->
        <div class="card-footer">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                <input type="text" class="form-control" id="dlurl" value="${a}" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('dlurl')" title="Copiar link">
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-end gap-2">
                <button class="btn btn-primary" title="Baixar PDF" onclick="initiateDownload('${e}', '${a}', '${n}')">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-gear"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a></li>
                  </ul>
                </div>
                ${copyButton}${r}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    
    <style>
      #pdf-container {
        position: relative;
      }
      
      #the-canvas {
        border: 1px solid #dee2e6;
        border-radius: 8px;
        background: white;
        transition: all 0.3s ease;
      }
      
      .pdf-toolbar {
        background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
        border-radius: 8px 8px 0 0;
      }
      
      .btn-outline-light:hover {
        background-color: rgba(255, 255, 255, 0.2);
        border-color: rgba(255, 255, 255, 0.3);
      }
      
      .card {
        box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
        border: none;
      }
      
      .card-header {
        border-bottom: 1px solid rgba(255, 255, 255, 0.2);
      }
      
      @media (max-width: 768px) {
        .card-header .row {
          flex-direction: column;
          gap: 10px;
        }
        
        .card-header .col-md-6:last-child {
          justify-content: center !important;
        }
      }
    </style>
  `;
    $("#content").html(m);

    // PDF Viewer Implementation
    var url = a;
    var pdfjsLib = window['pdfjs-dist/build/pdf'];
    pdfjsLib.GlobalWorkerOptions.workerSrc = '//cdn.jsdelivr.net/npm/pdfjs-dist@2.12.313/build/pdf.worker.js';
    
    var pdfDoc = null,
        pageNum = 1,
        pageRendering = false,
        pageNumPending = null,
        scale = 1.0,
        canvas = document.getElementById('the-canvas'),
        ctx = canvas.getContext('2d');

    // Loading state
    const loadingDiv = document.getElementById('pdf-loading');
    const canvasElement = document.getElementById('the-canvas');

    function renderPage(num) {
        pageRendering = true;
        pdfDoc.getPage(num).then(function(page) {
            var viewport = page.getViewport({scale: scale});
            canvas.height = viewport.height;
            canvas.width = viewport.width;
            
            var renderContext = {
                canvasContext: ctx,
                viewport: viewport
            };
            
            var renderTask = page.render(renderContext);
            renderTask.promise.then(function() {
                pageRendering = false;
                if (pageNumPending !== null) {
                    renderPage(pageNumPending);
                    pageNumPending = null;
                }
            });
        });
        
        document.getElementById('page_num').textContent = num;
        
        // Update button states
        document.getElementById('prev').disabled = (num <= 1);
        document.getElementById('next').disabled = (num >= pdfDoc.numPages);
    }

    function queueRenderPage(num) {
        if (pageRendering) {
            pageNumPending = num;
        } else {
            renderPage(num);
        }
    }

    function onPrevPage() {
        if (pageNum <= 1) return;
        pageNum--;
        queueRenderPage(pageNum);
    }

    function onNextPage() {
        if (pageNum >= pdfDoc.numPages) return;
        pageNum++;
        queueRenderPage(pageNum);
    }

    function zoomIn() {
        if (scale < 3.0) {
            scale += 0.25;
            queueRenderPage(pageNum);
        }
    }

    function zoomOut() {
        if (scale > 0.5) {
            scale -= 0.25;
            queueRenderPage(pageNum);
        }
    }

    function zoomReset() {
        scale = 1.0;
        queueRenderPage(pageNum);
    }

    function toggleFullscreen() {
        const container = document.getElementById('pdf-container');
        const fullscreenBtn = document.getElementById('fullscreen-toggle');
        const icon = fullscreenBtn.querySelector('i');
        
        if (!document.fullscreenElement) {
            container.requestFullscreen().then(() => {
                icon.className = 'bi bi-fullscreen-exit';
                fullscreenBtn.title = 'Sair da tela cheia';
            });
        } else {
            document.exitFullscreen().then(() => {
                icon.className = 'bi bi-fullscreen';
                fullscreenBtn.title = 'Tela cheia';
            });
        }
    }

    // Event Listeners
    document.getElementById('prev').addEventListener('click', onPrevPage);
    document.getElementById('next').addEventListener('click', onNextPage);
    document.getElementById('zoom-in').addEventListener('click', zoomIn);
    document.getElementById('zoom-out').addEventListener('click', zoomOut);
    document.getElementById('zoom-reset').addEventListener('click', zoomReset);
    document.getElementById('fullscreen-toggle').addEventListener('click', toggleFullscreen);

    // Keyboard navigation
    document.addEventListener('keydown', function(e) {
        if (e.target.tagName.toLowerCase() === 'input') return;
        
        switch(e.key) {
            case 'ArrowLeft':
            case 'ArrowUp':
                e.preventDefault();
                onPrevPage();
                break;
            case 'ArrowRight':
            case 'ArrowDown':
            case ' ':
                e.preventDefault();
                onNextPage();
                break;
            case '+':
            case '=':
                e.preventDefault();
                zoomIn();
                break;
            case '-':
                e.preventDefault();
                zoomOut();
                break;
            case '0':
                e.preventDefault();
                zoomReset();
                break;
            case 'f':
            case 'F11':
                e.preventDefault();
                toggleFullscreen();
                break;
        }
    });

    // Load PDF
    pdfjsLib.getDocument(url).promise.then(function(pdfDoc_) {
        pdfDoc = pdfDoc_;
        document.getElementById('page_count').textContent = pdfDoc.numPages;
        
        // Hide loading, show canvas
        loadingDiv.style.display = 'none';
        canvasElement.style.display = 'block';
        
        renderPage(pageNum);
    }).catch(function(error) {
        console.error('Erro ao carregar PDF:', error);
        loadingDiv.innerHTML = `
            <div class="text-center text-danger">
                <i class="bi bi-exclamation-triangle" style="font-size: 3rem;"></i>
                <h4 class="mt-3">Erro ao carregar PDF</h4>
                <p>Não foi possível carregar o arquivo PDF.</p>
                <button class="btn btn-primary" onclick="initiateDownload('${e}', '${a}', '${n}')">Baixar PDF</button>
            </div>
        `;
    });
}
function file_image(e, t, n, a, i, o) {
    var l = window.location.pathname.split("/");
    const r = UI.allow_file_copy ? generateCopyFileBox(i, o) : "";
    for (var s = "", d = "", c = 0; c < l.length; c++) {
        var p = l[c];
        c == l.length - 1 ? d += p + "?a=view" : d += p + "/",
        p.length > 30 && (p = (p = decodeURIComponent(p)).substring(0, 25) + "..."),
        "" == p && (p = "Home"),
        s += '<a href="' + d + '" class="breadcrumb-item">' + p + "</a>"
    }
    var m = `
    <div class="container-fluid"><br>
      <style>
        .path-navigation-container {
          margin-bottom: 1rem;
          padding: 0.75rem 1rem;
          background: rgba(0,0,0,0.02);
          border-radius: 8px;
          border-left: 4px solid #007bff;
          transition: all 0.3s ease;
        }
        [data-theme="dark"] .path-navigation-container {
          background: rgba(255,255,255,0.05);
          border-left-color: #0d6efd;
        }
        .path-navigation-container:hover {
          background: rgba(0,0,0,0.04);
          box-shadow: 0 2px 4px rgba(0,0,0,0.05);
        }
        [data-theme="dark"] .path-navigation-container:hover {
          background: rgba(255,255,255,0.08);
        }
        .breadcrumb {
          margin-bottom: 0;
          background: transparent;
          padding: 0;
        }
        .breadcrumb-item a {
          text-decoration: none;
          color: #007bff;
          transition: all 0.2s ease;
          display: inline-flex;
          align-items: center;
        }
        [data-theme="dark"] .breadcrumb-item a {
          color: #0d6efd;
        }
        .breadcrumb-item a:hover {
          color: #0056b3;
          transform: translateX(2px);
        }
        [data-theme="dark"] .breadcrumb-item a:hover {
          color: #3d8bfd;
        }
        .breadcrumb-item.active {
          color: #6c757d;
          font-weight: 500;
        }
        [data-theme="dark"] .breadcrumb-item.active {
          color: #adb5bd;
        }
      </style>
      <div class="path-navigation-container">
        <nav aria-label="breadcrumb">
          <ol class="breadcrumb" style="--bs-breadcrumb-divider: '›'; --bs-breadcrumb-item-padding-x: 0.5rem;">
            <li class="breadcrumb-item">
              <a href="/">
                <i class="bi bi-house-door me-1"></i>
                <span>Início</span>
              </a>
            </li>
            ${s}
          </ol>
        </nav>
      </div>
      
      <!-- Image Viewer Container -->
      <div class="card">
        <!-- Image Toolbar -->
        <div class="card-header bg-primary text-white">
          <div class="row align-items-center">
            <div class="col-md-6">
              <h5 class="mb-0"><i class="bi bi-image me-2"></i>${e}</h5>
              <small>${n}</small>
            </div>
            <div class="col-md-6">
              <div class="d-flex justify-content-end align-items-center">
                <!-- Zoom Controls -->
                <div class="btn-group me-2" role="group">
                  <button id="zoom-out" class="btn btn-outline-light btn-sm" title="Diminuir zoom">
                    <i class="bi bi-zoom-out"></i>
                  </button>
                  <button id="zoom-reset" class="btn btn-outline-light btn-sm" title="Zoom padrão">
                    <i class="bi bi-zoom-in"></i>
                  </button>
                  <button id="zoom-in" class="btn btn-outline-light btn-sm" title="Aumentar zoom">
                    <i class="bi bi-zoom-in"></i>
                  </button>
                </div>
                
                <!-- Fullscreen Toggle -->
                <button id="fullscreen-toggle" class="btn btn-outline-light btn-sm" title="Tela cheia">
                  <i class="bi bi-fullscreen"></i>
                </button>
              </div>
            </div>
          </div>
        </div>
        
        <!-- Image Container -->
        <div class="card-body p-0" style="background-color: #f8f9fa;">
          <div id="image-container" class="d-flex justify-content-center align-items-center" style="min-height: 600px; overflow: auto;">
            <img src="${a}" id="load_image" class="img-fluid shadow" style="max-width: 100%; max-height: 100%; object-fit: contain;">
          </div>
        </div>
        
        <!-- Image Actions -->
        <div class="card-footer">
          <div class="row">
            <div class="col-md-8">
              <div class="input-group">
                <span class="input-group-text"><i class="bi bi-link-45deg"></i></span>
                <input type="text" class="form-control" id="dlurl" value="${a}" readonly>
                <button class="btn btn-outline-secondary" type="button" onclick="copyToClipboard('dlurl')" title="Copiar link">
                  <i class="bi bi-clipboard"></i>
                </button>
              </div>
            </div>
            <div class="col-md-4">
              <div class="d-flex justify-content-end gap-2">
                <button type="button" class="btn btn-primary" onclick="initiateDownload('${e}', '${a}', '${n}')" title="Baixar imagem">
                  <i class="bi bi-download me-1"></i>Baixar
                </button>
                <div class="dropdown">
                  <button class="btn btn-primary dropdown-toggle" type="button" data-bs-toggle="dropdown">
                    <i class="bi bi-gear"></i>
                  </button>
                  <ul class="dropdown-menu">
                    <li><h6 class="dropdown-header">Downloaders</h6></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Free)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.adm.lite/idm.internet.download.manager.Downloader;S.title=${t};end">1DM (Lite)</a></li>
                    <li><a class="dropdown-item" href="intent:${a}#Intent;component=idm.internet.download.manager.plus/idm.internet.download.manager.Downloader;S.title=${t};end">1DM+ (Plus)</a></li>
                    <li><hr class="dropdown-divider"></li>
                    <li><a class="dropdown-item" href="${a}" target="_blank"><i class="bi bi-box-arrow-up-right me-2"></i>Google Drive</a></li>
                  </ul>
                </div>
                ${r}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    `;
    $("#content").html(m);
    
    // Image viewer functionality
    let currentZoom = 1;
    const image = document.getElementById('load_image');
    const container = document.getElementById('image-container');
    
    // Zoom functionality
    document.getElementById('zoom-in').addEventListener('click', function() {
        currentZoom = Math.min(currentZoom + 0.2, 3);
        image.style.transform = `scale(${currentZoom})`;
    });
    
    document.getElementById('zoom-out').addEventListener('click', function() {
        currentZoom = Math.max(currentZoom - 0.2, 0.5);
        image.style.transform = `scale(${currentZoom})`;
    });
    
    document.getElementById('zoom-reset').addEventListener('click', function() {
        currentZoom = 1;
        image.style.transform = `scale(${currentZoom})`;
    });
    
    // Fullscreen functionality
    document.getElementById('fullscreen-toggle').addEventListener('click', function() {
        const fullscreenBtn = this;
        const icon = fullscreenBtn.querySelector('i');
        
        if (!document.fullscreenElement) {
            container.requestFullscreen().then(() => {
                icon.className = 'bi bi-fullscreen-exit';
                fullscreenBtn.title = 'Sair da tela cheia';
            });
        } else {
            document.exitFullscreen().then(() => {
                icon.className = 'bi bi-fullscreen';
                fullscreenBtn.title = 'Tela cheia';
            });
        }
    });
    
    // Keyboard navigation
    document.addEventListener('keydown', function(event) {
        if (event.target.tagName.toLowerCase() === 'input') return;
        
        switch(event.key) {
            case '+':
            case '=':
                event.preventDefault();
                document.getElementById('zoom-in').click();
                break;
            case '-':
                event.preventDefault();
                document.getElementById('zoom-out').click();
                break;
            case '0':
                event.preventDefault();
                document.getElementById('zoom-reset').click();
                break;
            case 'f':
            case 'F11':
                event.preventDefault();
                document.getElementById('fullscreen-toggle').click();
                break;
        }
    });
}
function utc2delhi(e) {
    var t = new Date(e)
      , n = new Date(t.getTime() + 198e5)
      , a = n.getFullYear()
      , i = ("0" + (n.getMonth() + 1)).slice(-2);
    return `${("0" + n.getDate()).slice(-2)}-${i}-${a} ${("0" + n.getHours()).slice(-2)}:${("0" + n.getMinutes()).slice(-2)}:${("0" + n.getSeconds()).slice(-2)}`
}
function formatFileSize(e) {
    return e >= 1099511627776 ? e = (e / 1099511627776).toFixed(2) + " TB" : e >= 1073741824 ? e = (e / 1073741824).toFixed(2) + " GB" : e >= 1048576 ? e = (e / 1048576).toFixed(2) + " MB" : e >= 1024 ? e = (e / 1024).toFixed(2) + " KB" : e > 1 ? e += " bytes" : 1 === e ? e += " byte" : e = "",
    e
}
function markdown(e, t) {
    try {
        if (!t || typeof t !== 'string') {
            console.log('markdown: invalid content', t);
            return;
        }
    var n = marked.parse(t);
        if (!n || typeof n !== 'string') {
            console.log('markdown: failed to parse', n);
            return;
        }
        $(e).show().html(n);
    } catch (error) {
        console.error('markdown error:', error, 'content:', t);
        $(e).show().html('<p>Erro ao renderizar markdown</p>');
    }
}

// Função para renderizar README.md
function renderReadmeFile(fileId, fileName, mimeType) {
    const renderReadme = localStorage.getItem('renderReadme') === 'true';
    const renderTxt = localStorage.getItem('renderTxt') === 'true';
    
    // Verificar se é um arquivo README.md
    const isReadme = fileName.toLowerCase().includes('readme');
    
    // Verificar se é um arquivo de texto (baseado em extensões comuns e MIME type)
    const textExtensions = ['.txt', '.md', '.json', '.xml', '.csv', '.log', '.ini', '.cfg', '.conf', '.yaml', '.yml', '.toml', '.env', '.gitignore', '.htaccess', '.htpasswd'];
    const isTextFile = textExtensions.some(ext => fileName.toLowerCase().endsWith(ext)) || 
                      (mimeType && mimeType.startsWith('text/')) ||
                      (mimeType && mimeType.includes('json')) ||
                      (mimeType && mimeType.includes('xml'));
    
    // Verificar se deve renderizar baseado no tipo de arquivo e configuração
    if ((isReadme && !renderReadme) || (isTextFile && !renderTxt) || (!isReadme && !isTextFile)) {
        return null;
    }
    
    // Fazer requisição para obter o conteúdo do arquivo
    fetch(`/api/files/${fileId}/content`)
        .then(response => {
            if (!response.ok) {
                throw new Error(`HTTP ${response.status}: ${response.statusText}`);
            }
            return response.text();
        })
        .then(content => {
            // Determinar como renderizar baseado no tipo de arquivo
            let renderedContent;
            
            if (isReadme) {
                // README.md sempre como markdown
                renderedContent = marked.parse(content);
            } else if (isTextFile) {
                // Arquivos de texto: verificar se é markdown ou texto simples
                const isMarkdownFile = fileName.toLowerCase().endsWith('.md');
                if (isMarkdownFile) {
                    renderedContent = marked.parse(content);
                } else {
                    // Texto simples com formatação preservada
                    renderedContent = `<pre style="white-space: pre-wrap; font-family: inherit; margin: 0;">${content}</pre>`;
                }
            }
            
            // Criar seção README/TXT inline
            const readmeHtml = `
                <div class="readme-section mb-4">
                    <div class="card">
                        <div class="card-header bg-info text-white">
                            <h5 class="mb-0">
                                <i class="bi bi-file-text me-2"></i>${fileName}
                            </h5>
                        </div>
                        <div class="card-body">
                            <div class="readme-content" style="max-height: 400px; overflow-y: auto; line-height: 1.6;">
                                ${renderedContent}
                            </div>
                        </div>
                    </div>
                </div>
            `;
            
            // Inserir README no topo da lista de arquivos
            const listElement = $("#list");
            if (listElement.length > 0) {
                listElement.prepend(readmeHtml);
            } else {
                // Se não houver lista, inserir no content
                const contentElement = $("#content");
                if (contentElement.length > 0) {
                    contentElement.prepend(readmeHtml);
                }
            }
        })
        .catch(error => {
            console.error('Erro ao carregar README:', error);
        });
    
    return true; // Indica que o arquivo foi processado
}
function copyFunction() {
    var e = document.getElementById("dlurl");
    e.select(),
    e.setSelectionRange(0, 99999),
    navigator.clipboard.writeText(e.value).then((function() {
        document.getElementById("myTooltip").innerHTML = "Copiado"
    }
    )).catch((function(e) {
        console.error("Failed to copy text: ", e)
    }
    ))
}
function outFunc() {
    document.getElementById("myTooltip").innerHTML = "Copiar"
}
function updateCheckboxes() {
    const allCheckboxes = document.querySelectorAll('input[type="checkbox"]');
    // Filtrar checkboxes excluindo o "select-all-checkboxes"
    const e = Array.from(allCheckboxes).filter(checkbox => checkbox.id !== 'select-all-checkboxes');
    const t = document.getElementById("select-all-checkboxes");
    e.length > 0 && t && t.addEventListener("click", (()=>{
        e.forEach((checkbox=>{
            checkbox.checked = t.checked
        }
        ))
    }
    ))
}
async function getCookie(e) {
    for (var t = e + "=", n = document.cookie.split(";"), a = 0; a < n.length; a++) {
        for (var i = n[a]; " " == i.charAt(0); )
            i = i.substring(1, i.length);
        if (0 == i.indexOf(t))
            return i.substring(t.length, i.length)
    }
    return null
}
async function copyFile(e) {
    try {
        const t = document.getElementById("copystatus");
        t.innerHTML = "<div class='alert alert-danger' role='alert'> Processando... </div>";
        const n = document.getElementById("user_folder_id").value;
        if ("" === n)
            return t.innerHTML = "<div class='alert alert-danger' role='alert'> Empty ID </div>",
            null;
        document.getElementById("spinner").style.display = "block",
        document.cookie = `root_id=${n}; expires=Thu, 18 Dec 2050 12:00:00 UTC`;
        const a = Math.floor(Date.now() / 1e3)
          , i = await fetch("/copy", {
            method: "POST",
            cache: "no-cache",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: `id=${encodeURIComponent(e)}&root_id=${n}&resourcekey=null&time=${a}`
        });
        if (500 === i.status)
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File, Make Sure you've added system@zindex.eu.org to your Destination Folder </div>";
        else if (401 === i.status)
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unauthorized </div>";
        else if (i.ok) {
            const e = await i.json();
            if (e && e.name) {
                const t = `https://drive.google.com/file/d/${e.id}/view?usp=share_link`;
                document.getElementById("copyresult").innerHTML = `<div class="col-12 col-md-12"> <input type="text" id="usercopiedfile" class="form-control" placeholder="Enter Your Folder ID to Copy this File" value="${t}" readonly></div> <div class="col-12 col-md-12"> <a href="${t}" target="_blank" style="margin-top: 5px;" class="btn btn-danger btn-block">Abrir arquivo copiado</a></div>`
            } else
                e && e.error && e.error.message ? t.innerHTML = "<div class='alert alert-danger' role='alert'> " + e.error.message + " </div>" : t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File </div>"
        } else
            t.innerHTML = "<div class='alert alert-danger' role='alert'> Unable to Copy File </div>";
        document.getElementById("spinner").style.display = "none"
    } catch (e) {
        document.getElementById("copystatus").innerHTML = "<div class='alert alert-danger' role='alert'> An error occurred " + e + "</div>",
        document.getElementById("spinner").style.display = "none"
    }
}
String.prototype.trim = function(e) {
    return e ? this.replace(new RegExp("^\\" + e + "+|\\" + e + "+$","g"), "") : this.replace(/^\s+|\s+$/g, "")
}
,
window.onpopstate = function() {
    render(window.location.pathname)
}
,
$((function() {
    init(),
    render(window.location.pathname)
}
));
const observer = new MutationObserver((()=>{
    updateCheckboxes()
}
))
  , options = {
    childList: !0,
    subtree: !0
};
observer.observe(document.documentElement, options);

// Dark Mode Toggle Function
function toggleDarkMode() {
    const html = document.documentElement;
    const icon = document.getElementById('dark-mode-icon');
    const currentTheme = localStorage.getItem('theme') || 'light';
    
    let newTheme, newIconClass, newBootswatchTheme;
    
    if (currentTheme === 'dark') {
        newTheme = 'light';
        newIconClass = 'bi bi-moon-fill';
        newBootswatchTheme = 'flatly';
        html.removeAttribute('data-theme');
    } else {
        newTheme = 'dark';
        newIconClass = 'bi bi-sun-fill';
        newBootswatchTheme = 'darkly';
        html.setAttribute('data-theme', 'dark');
    }
    
    // Update icon
    if (icon) {
        icon.className = newIconClass;
    }
    
    // Update menu text
    const darkModeText = document.getElementById('darkModeText');
    if (darkModeText) {
        darkModeText.textContent = newTheme === 'dark' ? 'Modo Claro' : 'Modo Noturno';
    }
    
    // Save theme preference
    localStorage.setItem('theme', newTheme);
    
    // Change Bootswatch theme
    const currentLink = document.querySelector('link[href*="bootswatch"]');
    if (currentLink) {
        const baseUrl = 'https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/';
        const newHref = baseUrl + newBootswatchTheme + '/bootstrap.min.css';
        currentLink.href = newHref;
    } else {
        console.log('Bootswatch link not found!');
    }
    
}

// Initialize theme on page load
function initializeTheme() {
    console.log('initializeTheme called');
    const savedTheme = localStorage.getItem('theme') || 'light';
    const html = document.documentElement;
    const icon = document.getElementById('dark-mode-icon');
    
    if (savedTheme === 'dark') {
        html.setAttribute('data-theme', 'dark');
        if (icon) icon.className = 'bi bi-sun-fill';
        
        // Apply dark Bootswatch theme
        const currentLink = document.querySelector('link[href*="bootswatch"]');
        if (currentLink) {
            const baseUrl = 'https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/';
            const newHref = baseUrl + 'darkly/bootstrap.min.css';
            currentLink.href = newHref;
        } else {
            console.log('Bootswatch link not found!');
        }
        
    } else {
        html.removeAttribute('data-theme');
        if (icon) icon.className = 'bi bi-moon-fill';
        
        // Apply light Bootswatch theme
        const currentLink = document.querySelector('link[href*="bootswatch"]');
        if (currentLink) {
            console.log('Current Bootswatch link:', currentLink.href);
            const baseUrl = 'https://cdn.jsdelivr.net/npm/bootswatch@5.0.0/dist/';
            const newHref = baseUrl + 'flatly/bootstrap.min.css';
            currentLink.href = newHref;
        } else {
            console.log('Bootswatch link not found!');
        }
        
    }
}

// Função para adicionar nuvens animadas no background
function addCloudsBackground() {
    if (document.getElementById('clouds-background')) {
        return;
    }
    
    
    // Adicionar CSS das nuvens
    const style = document.createElement('style');
    style.id = 'clouds-styles';
    style.textContent = `
        /* Animated clouds background */
        .clouds-background {
            position: fixed;
            top: 0;
            left: 0;
            width: 100%;
            height: 100%;
            z-index: -1;
            overflow: hidden;
            pointer-events: none;
        }

        .cloud {
            position: absolute;
            background: rgba(128, 128, 128, 0.7);
            border-radius: 50px;
            opacity: 0.8;
            animation: float 20s infinite linear;
            box-shadow: 0 2px 10px rgba(0,0,0,0.1);
        }

        .cloud:before {
            content: '';
            position: absolute;
            background: rgba(128, 128, 128, 0.7);
            border-radius: 50px;
        }

        .cloud:after {
            content: '';
            position: absolute;
            background: rgba(128, 128, 128, 0.7);
            border-radius: 50px;
        }

        /* Cloud 1 */
        .cloud:nth-child(1) {
            width: 100px;
            height: 40px;
            top: 20%;
            animation-delay: 0s;
            animation-duration: 25s;
        }

        .cloud:nth-child(1):before {
            width: 50px;
            height: 50px;
            top: -25px;
            left: 10px;
        }

        .cloud:nth-child(1):after {
            width: 60px;
            height: 40px;
            top: -15px;
            right: 10px;
        }

        /* Cloud 2 */
        .cloud:nth-child(2) {
            width: 80px;
            height: 30px;
            top: 40%;
            animation-delay: -5s;
            animation-duration: 30s;
        }

        .cloud:nth-child(2):before {
            width: 40px;
            height: 40px;
            top: -20px;
            left: 15px;
        }

        .cloud:nth-child(2):after {
            width: 50px;
            height: 30px;
            top: -10px;
            right: 15px;
        }

        /* Cloud 3 */
        .cloud:nth-child(3) {
            width: 120px;
            height: 50px;
            top: 60%;
            animation-delay: -10s;
            animation-duration: 35s;
        }

        .cloud:nth-child(3):before {
            width: 60px;
            height: 60px;
            top: -30px;
            left: 20px;
        }

        .cloud:nth-child(3):after {
            width: 70px;
            height: 50px;
            top: -20px;
            right: 20px;
        }

        /* Cloud 4 */
        .cloud:nth-child(4) {
            width: 90px;
            height: 35px;
            top: 80%;
            animation-delay: -15s;
            animation-duration: 28s;
        }

        .cloud:nth-child(4):before {
            width: 45px;
            height: 45px;
            top: -22px;
            left: 12px;
        }

        .cloud:nth-child(4):after {
            width: 55px;
            height: 35px;
            top: -12px;
            right: 12px;
        }

        /* Cloud 5 */
        .cloud:nth-child(5) {
            width: 70px;
            height: 25px;
            top: 10%;
            animation-delay: -20s;
            animation-duration: 32s;
        }

        .cloud:nth-child(5):before {
            width: 35px;
            height: 35px;
            top: -17px;
            left: 8px;
        }

        .cloud:nth-child(5):after {
            width: 40px;
            height: 25px;
            top: -8px;
            right: 8px;
        }

        /* Dark mode clouds */
        [data-theme="dark"] .cloud {
            background: rgba(200, 200, 200, 0.6);
        }

        [data-theme="dark"] .cloud:before,
        [data-theme="dark"] .cloud:after {
            background: rgba(200, 200, 200, 0.6);
        }

        @keyframes float {
            0% {
                transform: translateX(-100px);
            }
            100% {
                transform: translateX(calc(100vw + 100px));
            }
        }
    `;
    document.head.appendChild(style);
    
    // Adicionar HTML das nuvens
    const cloudsDiv = document.createElement('div');
    cloudsDiv.id = 'clouds-background';
    cloudsDiv.className = 'clouds-background';
    cloudsDiv.innerHTML = `
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
        <div class="cloud"></div>
    `;
    document.body.appendChild(cloudsDiv);
}

// Função removida - modo noturno agora está no menu de configurações

// Add CSS styles for floating button
// Função removida - estilos agora estão no menu de configurações
function addFloatingButtonStyles_removed() {
    if (document.getElementById('floating-button-styles')) {
        return;
    }
    
    const style = document.createElement('style');
    style.id = 'floating-button-styles';
    style.textContent = `
        /* Floating Dark Mode Toggle Button */
        .floating-dark-mode-btn {
          position: fixed;
          bottom: 20px;
          left: 20px;
          z-index: 1000;
          transition: all 0.3s ease;
        }

        .floating-btn {
          width: 35px;
          height: 35px;
          border-radius: 50%;
          border: none;
          background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
          color: white;
          font-size: 1rem;
          cursor: pointer;
          box-shadow: 0 3px 10px rgba(0, 0, 0, 0.15);
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
          display: flex;
          align-items: center;
          justify-content: center;
          position: relative;
          overflow: hidden;
        }

        .floating-btn::before {
          content: '';
          position: absolute;
          top: 0;
          left: 0;
          width: 100%;
          height: 100%;
          background: linear-gradient(135deg, #764ba2 0%, #667eea 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          border-radius: 50%;
        }

        .floating-btn:hover {
          transform: translateY(-3px) scale(1.1);
          box-shadow: 0 12px 35px rgba(0, 0, 0, 0.25);
        }

        .floating-btn:hover::before {
          opacity: 1;
        }

        .floating-btn:active {
          transform: translateY(-1px) scale(1.05);
        }

        .floating-btn i {
          position: relative;
          z-index: 1;
          transition: all 0.3s ease;
        }

        .floating-btn:hover i {
          transform: rotate(180deg);
        }

        /* Dark mode styles for floating button */
        [data-theme="dark"] .floating-btn {
          background: linear-gradient(135deg, #ff6b6b 0%, #feca57 100%);
          box-shadow: 0 8px 25px rgba(255, 107, 107, 0.3);
        }

        [data-theme="dark"] .floating-btn::before {
          background: linear-gradient(135deg, #feca57 0%, #ff6b6b 100%);
        }

        [data-theme="dark"] .floating-btn:hover {
          box-shadow: 0 12px 35px rgba(255, 107, 107, 0.4);
        }

        /* Light theme - black text */
        .navbar-brand,
        .nav-link,
        .nav-link:hover,
        .nav-link:focus,
        .nav-link:active,
        .navbar-text,
        .navbar-text strong {
          color: #000000 !important;
        }

        /* Override Bootstrap/Bootswatch link colors */
        .navbar .nav-link {
          color: #000000 !important;
        }

        .navbar .nav-link:hover {
          color: #000000 !important;
        }

        .navbar .nav-link:focus {
          color: #000000 !important;
        }

        /* Dark Mode Styles for Navbar */
        [data-theme="dark"] .navbar {
          background-color: #2d2d2d !important;
          border-bottom: 1px solid #444;
        }

        [data-theme="dark"] .navbar-brand,
        [data-theme="dark"] .nav-link {
          color: #ffffff !important;
        }

        [data-theme="dark"] .navbar-text {
          color: #ffffff !important;
        }

        [data-theme="dark"] .navbar-text strong {
          color: #ffffff !important;
        }

        /* Light theme - dark navbar-toggler with high specificity */
        .navbar .navbar-toggler,
        .navbar-toggler {
          border-color: #000000 !important;
          background-color: transparent !important;
        }

        .navbar .navbar-toggler-icon,
        .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%280, 0, 0, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: 100% !important;
        }

        /* Dark theme - white navbar-toggler with high specificity */
        [data-theme="dark"] .navbar .navbar-toggler,
        [data-theme="dark"] .navbar-toggler {
          border-color: #ffffff !important;
          background-color: transparent !important;
        }

        [data-theme="dark"] .navbar .navbar-toggler-icon,
        [data-theme="dark"] .navbar-toggler-icon {
          background-image: url("data:image/svg+xml,%3csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 30 30'%3e%3cpath stroke='rgba%28255, 255, 255, 1%29' stroke-linecap='round' stroke-miterlimit='10' stroke-width='2' d='M4 7h22M4 15h22M4 23h22'/%3e%3c/svg%3e") !important;
          background-repeat: no-repeat !important;
          background-position: center !important;
          background-size: 100% !important;
        }

        /* Responsive adjustments */
        @media (max-width: 768px) {
          .floating-dark-mode-btn {
            left: 10px;
            bottom: 10px;
          }
          
          .floating-btn {
            width: 30px;
            height: 30px;
            font-size: 0.8rem;
          }
        }

        /* Animation for button appearance */
        @keyframes slideInRight {
          from {
            transform: translateX(100px);
            opacity: 0;
          }
          to {
            transform: translateX(0);
            opacity: 1;
          }
        }

        .floating-dark-mode-btn {
          animation: slideInRight 0.6s ease-out;
        }
    `;
    
    document.head.appendChild(style);
}

// Initialize everything when DOM is ready
function initializeDarkMode() {
    initializeTheme();
}

// Initialize dark mode immediately when functions are defined
setTimeout(function() {
    initializeDarkMode();
}, 100);

// Initialize when DOM is ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initializeDarkMode);
} else {
    initializeDarkMode();
}

// Also initialize when new content is loaded (for dynamic pages)
const darkModeObserver = new MutationObserver(function(mutations) {
    mutations.forEach(function(mutation) {
        if (mutation.type === 'childList' && mutation.addedNodes.length > 0) {
            // Check if new content was added and add button if needed
            // Button creation removed - now handled by settings menu
        }
    });
});

function startObserving() {
    if (document.body) {
        darkModeObserver.observe(document.body, {
            childList: true,
            subtree: true
        });
        console.log('MutationObserver started observing document.body');
    } else {
        console.log('document.body not available yet, retrying in 100ms...');
        setTimeout(startObserving, 100);
    }
}

startObserving();