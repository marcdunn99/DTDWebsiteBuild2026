/* =========================================================
   Denise Taylor-Dunn – Psychic and Medium
   Minimal progressive-enhancement JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* -------------------------------------------------------
     Mobile navigation
     ------------------------------------------------------- */
  var navToggle = document.querySelector('.nav-toggle');
  var primaryNav = document.getElementById('primary-navigation');

  if (navToggle && primaryNav) {
    var closeNav = function () {
      navToggle.setAttribute('aria-expanded', 'false');
      primaryNav.classList.remove('is-open');
    };

    var openNav = function () {
      navToggle.setAttribute('aria-expanded', 'true');
      primaryNav.classList.add('is-open');
    };

    navToggle.addEventListener('click', function () {
      var isOpen = navToggle.getAttribute('aria-expanded') === 'true';
      if (isOpen) {
        closeNav();
      } else {
        openNav();
      }
    });

    // Close the menu after a navigation link is chosen.
    primaryNav.querySelectorAll('a').forEach(function (link) {
      link.addEventListener('click', function () {
        if (window.matchMedia('(max-width: 899px)').matches) {
          closeNav();
        }
      });
    });

    // Allow Escape to close the mobile menu and return focus to the toggle.
    document.addEventListener('keydown', function (event) {
      if (event.key === 'Escape' && navToggle.getAttribute('aria-expanded') === 'true') {
        closeNav();
        navToggle.focus();
      }
    });
  }

  /* -------------------------------------------------------
     Pre-select enquiry type when an "Enquire" button is used
     ------------------------------------------------------- */
  var enquiryTypeField = document.getElementById('enquiry-type');

  document.querySelectorAll('[data-enquiry-type]').forEach(function (button) {
    button.addEventListener('click', function () {
      if (enquiryTypeField) {
        enquiryTypeField.value = button.getAttribute('data-enquiry-type');
      }
    });
  });

  /* -------------------------------------------------------
     Enquiry form: client-side validation and status messaging.

     NOTE: This form does not yet submit to a backend or email
     service. Before publishing, connect the form to a processor
     (for example, a server-side endpoint or a third-party form
     service) and replace this handler's placeholder success
     behaviour with a real submission.
     ------------------------------------------------------- */
  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');

  if (form && formStatus) {
    form.addEventListener('submit', function (event) {
      event.preventDefault();

      var isValid = true;
      var firstInvalidField = null;

      form.querySelectorAll('[required]').forEach(function (field) {
        var wrapper = field.closest('.form-field');
        var isEmpty = field.value.trim() === '';
        var isInvalidEmail = field.type === 'email' && !isEmpty && !field.validity.valid;

        if (wrapper) {
          if (isEmpty || isInvalidEmail) {
            wrapper.classList.add('has-error');
            isValid = false;
            if (!firstInvalidField) {
              firstInvalidField = field;
            }
          } else {
            wrapper.classList.remove('has-error');
          }
        }
      });

      if (!isValid) {
        formStatus.textContent = 'Please complete all required fields before sending your enquiry.';
        formStatus.setAttribute('data-state', 'error');
        if (firstInvalidField) {
          firstInvalidField.focus();
        }
        return;
      }

      // Placeholder confirmation until the form is connected to a backend.
      formStatus.textContent = 'Thank you. Your enquiry has been prepared for sending — form submission handling still needs to be connected before this website goes live.';
      formStatus.setAttribute('data-state', 'success');
      form.reset();
    });
  }

  /* -------------------------------------------------------
     Footer copyright year
     ------------------------------------------------------- */
  var yearEl = document.getElementById('current-year');
  if (yearEl) {
    yearEl.textContent = new Date().getFullYear();
  }
});
