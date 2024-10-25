"use strict";

(function init100vh() {
  function setHeight() {
    var vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', "".concat(vh, "px"));
  }
  setHeight();
  window.addEventListener('resize', setHeight);
})();
window.addEventListener("orientationchange", function () {
  location.reload(true);
});

// color padding-top for banner__title-top
document.addEventListener("DOMContentLoaded", function () {
  function isIOS() {
    return /iPhone|iPad|iPod/i.test(navigator.userAgent);
  }
  function isMacOS() {
    return navigator.platform === 'MacIntel' && !navigator.userAgent.includes('Mobile');
  }
  var bannerTitleTop = document.querySelector('.banner__txt');
  if (!isIOS() && !isMacOS() && bannerTitleTop) {
    bannerTitleTop.classList.add('mar-pad');
  }
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIm1haW4uanMiXSwibmFtZXMiOlsiaW5pdDEwMHZoIiwic2V0SGVpZ2h0IiwidmgiLCJ3aW5kb3ciLCJpbm5lckhlaWdodCIsImRvY3VtZW50IiwiZG9jdW1lbnRFbGVtZW50Iiwic3R5bGUiLCJzZXRQcm9wZXJ0eSIsImFkZEV2ZW50TGlzdGVuZXIiLCJsb2NhdGlvbiIsInJlbG9hZCIsImlzSU9TIiwidGVzdCIsIm5hdmlnYXRvciIsInVzZXJBZ2VudCIsImlzTWFjT1MiLCJwbGF0Zm9ybSIsImluY2x1ZGVzIiwiYmFubmVyVGl0bGVUb3AiLCJxdWVyeVNlbGVjdG9yIiwiY2xhc3NMaXN0IiwiYWRkIl0sIm1hcHBpbmdzIjoiOztBQUFBLENBQUMsU0FBU0EsU0FBUyxHQUFFO0VBQ2pCLFNBQVNDLFNBQVMsR0FBRztJQUNqQixJQUFJQyxFQUFFLEdBQUdDLE1BQU0sQ0FBQ0MsV0FBVyxHQUFHLElBQUk7SUFDbENDLFFBQVEsQ0FBQ0MsZUFBZSxDQUFDQyxLQUFLLENBQUNDLFdBQVcsQ0FBQyxNQUFNLFlBQUtOLEVBQUUsUUFBSztFQUNqRTtFQUNBRCxTQUFTLEVBQUU7RUFDWEUsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxRQUFRLEVBQUVSLFNBQVMsQ0FBQztBQUNoRCxDQUFDLEdBQUc7QUFFSkUsTUFBTSxDQUFDTSxnQkFBZ0IsQ0FBQyxtQkFBbUIsRUFBRSxZQUFNO0VBQy9DQyxRQUFRLENBQUNDLE1BQU0sQ0FBQyxJQUFJLENBQUM7QUFDekIsQ0FBQyxDQUFDOztBQUVGO0FBQ0FOLFFBQVEsQ0FBQ0ksZ0JBQWdCLENBQUMsa0JBQWtCLEVBQUUsWUFBVztFQUNyRCxTQUFTRyxLQUFLLEdBQUc7SUFDYixPQUFPLG1CQUFtQixDQUFDQyxJQUFJLENBQUNDLFNBQVMsQ0FBQ0MsU0FBUyxDQUFDO0VBQ3hEO0VBRUEsU0FBU0MsT0FBTyxHQUFHO0lBQ2YsT0FBT0YsU0FBUyxDQUFDRyxRQUFRLEtBQUssVUFBVSxJQUFJLENBQUNILFNBQVMsQ0FBQ0MsU0FBUyxDQUFDRyxRQUFRLENBQUMsUUFBUSxDQUFDO0VBQ3ZGO0VBRUEsSUFBSUMsY0FBYyxHQUFHZCxRQUFRLENBQUNlLGFBQWEsQ0FBQyxjQUFjLENBQUM7RUFFM0QsSUFBSSxDQUFDUixLQUFLLEVBQUUsSUFBSSxDQUFDSSxPQUFPLEVBQUUsSUFBSUcsY0FBYyxFQUFFO0lBQzFDQSxjQUFjLENBQUNFLFNBQVMsQ0FBQ0MsR0FBRyxDQUFDLFNBQVMsQ0FBQztFQUMzQztBQUNKLENBQUMsQ0FBQyIsImZpbGUiOiJtYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiKGZ1bmN0aW9uIGluaXQxMDB2aCgpe1xuICAgIGZ1bmN0aW9uIHNldEhlaWdodCgpIHtcbiAgICAgICAgbGV0IHZoID0gd2luZG93LmlubmVySGVpZ2h0ICogMC4wMTtcbiAgICAgICAgZG9jdW1lbnQuZG9jdW1lbnRFbGVtZW50LnN0eWxlLnNldFByb3BlcnR5KCctLXZoJywgYCR7dmh9cHhgKTtcbiAgICB9XG4gICAgc2V0SGVpZ2h0KCk7XG4gICAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHNldEhlaWdodCk7XG59KSgpO1xuXG53aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcIm9yaWVudGF0aW9uY2hhbmdlXCIsICgpID0+IHtcbiAgICBsb2NhdGlvbi5yZWxvYWQodHJ1ZSlcbn0pO1xuXG4vLyBjb2xvciBwYWRkaW5nLXRvcCBmb3IgYmFubmVyX190aXRsZS10b3BcbmRvY3VtZW50LmFkZEV2ZW50TGlzdGVuZXIoXCJET01Db250ZW50TG9hZGVkXCIsIGZ1bmN0aW9uKCkge1xuICAgIGZ1bmN0aW9uIGlzSU9TKCkge1xuICAgICAgICByZXR1cm4gL2lQaG9uZXxpUGFkfGlQb2QvaS50ZXN0KG5hdmlnYXRvci51c2VyQWdlbnQpO1xuICAgIH1cblxuICAgIGZ1bmN0aW9uIGlzTWFjT1MoKSB7XG4gICAgICAgIHJldHVybiBuYXZpZ2F0b3IucGxhdGZvcm0gPT09ICdNYWNJbnRlbCcgJiYgIW5hdmlnYXRvci51c2VyQWdlbnQuaW5jbHVkZXMoJ01vYmlsZScpO1xuICAgIH1cblxuICAgIGxldCBiYW5uZXJUaXRsZVRvcCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5iYW5uZXJfX3R4dCcpO1xuXG4gICAgaWYgKCFpc0lPUygpICYmICFpc01hY09TKCkgJiYgYmFubmVyVGl0bGVUb3ApIHtcbiAgICAgICAgYmFubmVyVGl0bGVUb3AuY2xhc3NMaXN0LmFkZCgnbWFyLXBhZCcpO1xuICAgIH1cbn0pOyJdfQ==
