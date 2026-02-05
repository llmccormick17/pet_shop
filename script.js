// App module
var app = (function () {
  /* Properties */
  var websiteName = "PetShop";

  /* Methods */
  return {
    getWebsiteName: function () {
      return websiteName;
    }
  };
})();

// Common constructor
function Common() {
  let self = this;

  /* Properties */
  this.promoBar = {
    promoItems: null,
    currentItem: 0,
    numberOfItems: 0
  };

  /* Methods */
  this.initialisePromo = function () {
    const promoItems = document.querySelectorAll('#promo > div');
    this.promoBar.promoItems = promoItems;
    this.promoBar.numberOfItems = promoItems.length;
    this.startDelay();
  };

  this.startDelay = function () {
    setTimeout(function () {
      self.showNextPromoItem();
    }, 4000);
  };

  this.showNextPromoItem = function () {
    const items = self.promoBar.promoItems;
    const count = self.promoBar.numberOfItems;

    if (!items || count === 0) return;

    // hide current
    items[self.promoBar.currentItem].style.display = 'none';

    // move to next (loop)
    if (self.promoBar.currentItem >= count - 1) {
      self.promoBar.currentItem = 0;
    } else {
      self.promoBar.currentItem++;
    }

    // show next
    items[self.promoBar.currentItem].style.display = '';

    // schedule next change
    self.startDelay();
  };
}

// HomeIndex constructor
function HomeIndex() {
  /* Properties */
  const heightFromTop = 300;

  /* Methods */
  this.initialiseScrollToTopButton = function () {
    const scrollButton = document.getElementById('scrollToTopBtn');
    if (!scrollButton) return;

    scrollButton.addEventListener('click', function () {
      window.scrollTo({
        top: 0,
        behavior: 'smooth'
      });
    });
  };
}

// Run when DOM is ready
document.addEventListener('DOMContentLoaded', function () {
  // Common (promo bar)
  app.common = new Common();
  app.common.initialisePromo();

  // HomeIndex (scroll to top)
  app.homeIndex = new HomeIndex();
  app.homeIndex.initialiseScrollToTopButton();
});
