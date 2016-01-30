/* global Stripe, $ */
'use strict';

/**
 * Proceed checkout with Stripe
 * 1. Set the publishable key
 * 2. Create the single-use token
 * 3. Proceed the checkout with a server-side callback
 */

var Checkout = function(){
  this.initialize();
  return this;
};

var prototype = Checkout.prototype;

prototype.TOKEN = 'YOUR-PUBLISHABLE-API-KEY';
prototype.CHECKOUT = 'public/dist/checkout.php';

/**
 * initialize and cconstructor
 *
 * @return {Checkout} - return checkout object
 */
prototype.initialize = function initialize() {
  Stripe.setPublishableKey(this.TOKEN);

  return this;
};

/**
 * Create the single-use token from credit card
 *
 * @param  {Object} cardForm - credit card form
 * @return {Checkout} - return checkout object
 */
prototype._createSingleUseToken = function _createSingleUseToken(cardForm){
  //Create the token only with the form card
  Stripe.card.createToken(cardForm, this._stripeResponseHandler.bind(this));

  return this;
};

/**
 * _stripeResponseHandler - description
 *
 * @param  {String} status   description
 * @param  {Object} response - stripe token creation response
 * @return {Checkout} - return checkout object
 */
prototype._stripeResponseHandler = function _stripeResponseHandler(status, response) {

  if (response.error) {
    this._checkoutCallback && this._checkoutCallback(response.error, null);
  } else {
    // response contains id and card, which contains additional card details
    var token = response.id;
    // Insert the token into the form so it gets submitted to the server
    this._contactForm.append($('<input type="hidden" name="stripeToken" />').val(token));
    // and submit
    $.post(this.CHECKOUT, this._contactForm.serialize(), this.stripeSuccess.bind(this));
  }

  return this;
};

/**
 * Stripe handler server response
 *
 * @param  {Object} response - server response
 * @return {Checkout} - return checkout object
 */
prototype.stripeSuccess = function stripeSuccess(response){

  if (response.error) {
    this._checkoutCallback && this._checkoutCallback(response.error, null);
  } else {
    this._checkoutCallback && this._checkoutCallback(null, response);
  }

  return this;
};

/**
 * Proceed paiement
 *
 * @param  {Object} forms - list of forms
 * @param  {Function} callback - callback after the stripe checkout
 * @return {Checkout} - return checkout object
 */
prototype.proceed = function proceed(forms, callback){
  this._contactForm = forms.contact;
  this._cardForm = forms.card;
  this._checkoutCallback = callback;

  this._createSingleUseToken(this._cardForm);

  return this;
};


module.exports = new Checkout();
