(function ($) {

  "use strict";

  // Initialize AOS animation
  AOS.init({
    duration: 1000,
    once: true,
    easing: 'ease-in-out',
  });

  // init Isotope
  var initIsotope = function () {

    $('.grid').each(function () {

      // $('.grid').imagesLoaded( function() {
      // images have loaded
      var $buttonGroup = $('.button-group');
      var $checked = $buttonGroup.find('.is-checked');
      var filterValue = $checked.attr('data-filter');

      var $grid = $('.grid').isotope({
        itemSelector: '.portfolio-item',
        // layoutMode: 'fitRows',
        filter: filterValue
      });

      // bind filter button click
      $('.button-group').on('click', 'a', function (e) {
        e.preventDefault();
        filterValue = $(this).attr('data-filter');
        $grid.isotope({ filter: filterValue });
      });

      // change is-checked class on buttons
      $('.button-group').each(function (i, buttonGroup) {
        $buttonGroup.on('click', 'a', function () {
          $buttonGroup.find('.is-checked').removeClass('is-checked');
          $(this).addClass('is-checked');
        });
      });
      // });

    });
  }

  // init Chocolat light box
  var initChocolat = function () {
    Chocolat(document.querySelectorAll('.image-link'), {
      imageSize: 'contain',
      loop: true,
    })
  }

  // window load
  $(window).load(function () {
    $(".preloader").fadeOut("slow");
    initIsotope();
  })

  $(document).ready(function () {
    initChocolat();

    // Initialize Testimonials Swiper
    const servicesSwiper = new Swiper('.servicesSwiper', {
      slidesPerView: 1,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      }
    });

    // Initialize Testimonials Swiper
    const testimonialsSwiper = new Swiper('.testimonialsSwiper', {
      slidesPerView: 3,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 5000,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Works Swiper
    const worksSwiper = new Swiper('.worksSwiper', {
      slidesPerView: 4,
      spaceBetween: 20,
      loop: true,
      // autoplay: {
      //   delay: 4000,
      //   disableOnInteraction: false,
      // },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Articles Swiper
    const articlesSwiper = new Swiper('.articlesSwiper', {
      slidesPerView: 3,
      spaceBetween: 20,
      loop: true,
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        300: {
          slidesPerView: 1,
        },
        768: {
          slidesPerView: 2,
          spaceBetween: 20,
        },
        1200: {
          slidesPerView: 3,
          spaceBetween: 30,
        },
      },
    });

    // Initialize Logos Swiper
    const logosSwiper = new Swiper('.logosSwiper', {
      slidesPerView: 2,
      spaceBetween: 30,
      loop: true,
      autoplay: {
        delay: 2000,
        disableOnInteraction: false,
      },
      breakpoints: {
        576: {
          slidesPerView: 1,
          spaceBetween: 30,
        },
        768: {
          slidesPerView: 3,
          spaceBetween: 40,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 50,
        }
      }
    });

  });

  // Enhanced Menu Toggle Functionality with Animations
  document.addEventListener('DOMContentLoaded', function () {
    const menuBtn = document.querySelector('.menu-toggle-btn');
    const closeBtn = document.getElementById('closeMenuBtn');
    const fullscreenMenu = document.getElementById('fullscreenMenu');

    if (menuBtn) {
      menuBtn.addEventListener('click', function () {
        fullscreenMenu.style.display = 'block';
        document.body.style.overflow = 'hidden';
        // Trigger animation after display is set
        setTimeout(() => {
          fullscreenMenu.classList.add('active');
        }, 10);
      });
    }

    if (closeBtn) {
      closeBtn.addEventListener('click', function () {
        // Start closing animation
        fullscreenMenu.classList.remove('active');

        // Wait for animation to complete before hiding
        setTimeout(() => {
          fullscreenMenu.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 800); // Match this with your CSS transition duration
      });
    }

    // Close menu when clicking on a link
    const menuLinks = document.querySelectorAll('.menu-link');
    menuLinks.forEach(link => {
      link.addEventListener('click', function () {
        fullscreenMenu.classList.remove('active');
        setTimeout(() => {
          fullscreenMenu.style.display = 'none';
          document.body.style.overflow = 'auto';
        }, 800);
      });
    });

  });

})(jQuery);

class Board {
  constructor() {
    this.squares = Array(8).fill(null).map(() => Array(8).fill(null));
    this.initializePieces();
  }

  initializePieces() {
    // Initialize pawns
    for (let i = 0; i < 8; i++) {
      this.squares[1][i] = 'P';
      this.squares[6][i] = 'p';
    }

    // Initialize other pieces
    this.squares[0][0] = 'R';
    this.squares[0][1] = 'N';
    this.squares[0][2] = 'B';
    this.squares[0][3] = 'Q';
    this.squares[0][4] = 'K';
    this.squares[0][5] = 'B';
    this.squares[0][6] = 'N';
    this.squares[0][7] = 'R';

    this.squares[7][0] = 'r';
    this.squares[7][1] = 'n';
    this.squares[7][2] = 'b';
    this.squares[7][3] = 'q';
    this.squares[7][4] = 'k';
    this.squares[7][5] = 'b';
    this.squares[7][6] = 'n';
    this.squares[7][7] = 'r';
  }

  printBoard() {
    console.log('  a b c d e f g h');
    for (let i = 0; i < 8; i++) {
      console.log(`${i + 1} `);
      for (let j = 0; j < 8; j++) {
        console.log(this.squares[i][j] || '-');
      }
      console.log();
    }
  }

  isValidMove(startX, startY, endX, endY) {
    // Basic validation: check if start and end squares are within the board
    if (startX < 0 || startX >= 8 || startY < 0 || startY >= 8 || endX < 0 || endX >= 8 || endY < 0 || endY >= 8) {
      return false;
    }

    // Check if start square contains a piece of the current turn's color
    const piece = this.squares[startY][startX];
    if (!piece || (piece.toUpperCase() === 'P' && this.currentTurn === 'black') || (piece.toUpperCase() !== 'P' && this.currentTurn === 'white')) {
      return false;
    }

    // Check if end square is empty or contains a piece of the opposite color
    const endPiece = this.squares[endY][endX];
    if (endPiece && endPiece.toUpperCase() === piece.toUpperCase()) {
      return false;
    }

    // Basic movement validation (only for pawns and knights)
    if (piece.toUpperCase() === 'P') {
      // Pawns can move forward one or two squares, but captures diagonally one square
      if (startX === endX && (endY === startY + 1 || (endY === startY + 2 && startY === 1))) {
        return true;
      } else if (Math.abs(startX - endX) === 1 && endY === startY + 1) {
        return true;
      }
    } else if (piece.toUpperCase() === 'N') {
      // Knights move in an L-shape
      if (Math.abs(startX - endX) === 2 && Math.abs(startY - endY) === 1) {
        return true;
      } else if (Math.abs(startX - endX) === 1 && Math.abs(startY - endY) === 2) {
        return true;
      }
    }

    return false;
  }

  makeMove(startX, startY, endX, endY) {
    if (this.isValidMove(startX, startY, endX, endY)) {
      this.squares[endY][endX] = this.squares[startY][startX];
      this.squares[startY][startX] = null;
      return true;
    }
    return false;
  }
}

class ChessGame {
  constructor() {
    this.board = new Board();
    this.currentTurn = 'white';
  }

  startGame() {
    console.log("Welcome to the Chess Game!");
    this.board.printBoard();
    this.playTurn();
  }

  playTurn() {
    const move = prompt('Enter your move (e.g., "a2 a4"):');
    const [startX, startY] = move[0].charCodeAt(0) - 'a'.charCodeAt(0);
    const [endX, endY] = move[2].charCodeAt(0) - 'a'.charCodeAt(0);
    if (this.board.makeMove(startX, startY, endX, endY)) {
      this.board.printBoard();
      this.currentTurn = this.currentTurn === 'white' ? 'black' : 'white';
      this.playTurn();
    } else {
      console.log('Invalid move. Try again.');
      this.playTurn();
    }
  }}