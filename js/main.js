/* =========================================================
   Denise Taylor-Dunn – Psychic and Medium
   Minimal progressive-enhancement JavaScript
   ========================================================= */

document.addEventListener('DOMContentLoaded', function () {
  /* -------------------------------------------------------
     Header shadow once the page has scrolled past the top
     ------------------------------------------------------- */
  var header = document.querySelector('.site-header');
  if (header) {
    var updateHeaderShadow = function () {
      header.classList.toggle('is-scrolled', window.scrollY > 4);
    };
    updateHeaderShadow();
    window.addEventListener('scroll', updateHeaderShadow, { passive: true });
  }

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
     Enquiry form: client-side validation, then submission to
     FormSubmit (https://formsubmit.co), which emails entries to
     hello@denisetaylordunn.com. No backend of our own is needed
     since this site is static.
     ------------------------------------------------------- */
  var form = document.getElementById('enquiry-form');
  var formStatus = document.getElementById('form-status');
  var FORM_ENDPOINT = 'https://formsubmit.co/ajax/hello@denisetaylordunn.com';

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

      var submitButton = form.querySelector('button[type="submit"]');
      if (submitButton) {
        submitButton.disabled = true;
      }
      formStatus.removeAttribute('data-state');
      formStatus.textContent = 'Sending your enquiry…';

      var formData = new FormData(form);
      var payload = {
        name: formData.get('name'),
        email: formData.get('email'),
        'Enquiry type': formData.get('enquiry-type'),
        message: formData.get('message'),
        _subject: 'New website enquiry: ' + formData.get('enquiry-type'),
        _template: 'table'
      };

      fetch(FORM_ENDPOINT, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Accept: 'application/json'
        },
        body: JSON.stringify(payload)
      })
        .then(function (response) {
          if (!response.ok) {
            throw new Error('Submission failed');
          }
          formStatus.textContent = "Thank you. Your enquiry has been sent — I'll be in touch soon.";
          formStatus.setAttribute('data-state', 'success');
          form.reset();
        })
        .catch(function () {
          formStatus.textContent = 'Sorry, something went wrong sending your enquiry. Please try again, or email hello@denisetaylordunn.com directly.';
          formStatus.setAttribute('data-state', 'error');
        })
        .finally(function () {
          if (submitButton) {
            submitButton.disabled = false;
          }
        });
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
