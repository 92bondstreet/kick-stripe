/* global $ */
'use strict';

var checkout = require('./checkout');
var fs = require('fs');
var page = require('page');
var url = require('url');

var Jeffrey = function(){
  this.initialize();
  return this;
};

var prototype = Jeffrey.prototype;


/**
 * Jeffrey Constructor
 *
 * @return {Jeffrey} - return the Jeffrey object
 */
prototype.initialize = function initialize(){
  this.validationOptions = {'onkeyup': false, 'focusCleanup': true};
  this._content = $('.content');

  this.saveTemplate();
  this.router();
  this.saveDom();
  this.on();

  return this;
};

/**
 * Router
 *
 * @return {Jeffrey} - return the Jeffrey object
 */
prototype.router = function router(){
  var urlObject = url.parse(window.document.URL);

  if(urlObject.pathname !== '/') {
    page.base(urlObject.pathname);
  }
  
  page('/', this.render.bind(this));
  page('/en-cours', this.inProgress.bind(this));
  page('/merci', this.done.bind(this));
  page({'hashbang': true});

  return this;
};

/**
 * Mustache templating
 *
 * @return {Jeffrey} - return the Jeffrey object
 */
prototype.saveTemplate = function saveTemplate() {
  this.formTpl = fs.readFileSync(__dirname + '/template/form.tpl', 'utf-8');
  this.inProgressTpl = fs.readFileSync(__dirname + '/template/in-progress.tpl', 'utf-8');
  this.doneTpl = fs.readFileSync(__dirname + '/template/done.tpl', 'utf-8');

  return this;
};

/**
 * Render main template
 *
 * @return {Jeffrey} - return the Jeffrey object
 */
prototype.render = function render(){
  this._content.html(this.formTpl);

  return this;
};

/**
 * Update the view
 *
 * @param  {type} template - to render
 * @return {Jeffrey} - return the Jeffrey object
 */
prototype.update = function update(template){
  this._content.html(template);

  return this;
};

/**
 * Listener
 *
 * @return {Jeffrey} - jeffrey object
 */
prototype.on = function on(){
  this._checkout.click(this.validForms.bind(this));
  this._home.click(this.backToHome.bind(this));

  return this;
};

/**
 * Save DOM elements
 *
 * @return {Jeffrey} - jeffrey object
 */
prototype.saveDom = function saveDom(){
  this._contact = $('#contact');
  this._card = $('#card');
  this._checkout = $('#checkout');
  this._owner = $('input[data-stripe="owner"]');
  this._number = $('input[data-stripe="number"]');
  this._month = $('input[data-stripe="exp-month"]');
  this._year = $('input[data-stripe="exp-year"]');
  this._cvc = $('input[data-stripe="cvc"]');
  this._home = $('.brand .home');

  //Enable form validation with jquery Validation plugin
  this._contact.validate(this.validationOptions);
  this.cardValidator = this._card.validate(this.validationOptions);

  return this;
};

/**
 * Valid required and type inputs
 *
 * @return {Jeffrey} - jeffrey object
 */
prototype.validForms = function validForms(){

  //2 requirements: contact and credit card
  if (this._contact.valid() && this.validCard()) {
    page('/en-cours');
    checkout.proceed({'contact': this._contact, 'card': this._card}, function(){
      page('/merci');
    });
  }

  return this;
};

/**
 * Valid card requirements
 *
 * @return {Boolean} - return yes or no valid credit card input
 */
prototype.validCard = function validCard(){
  var isValid = [this.cardValidator.element(this._owner),
  this.cardValidator.element(this._number),
  this.cardValidator.element(this._year),
  this.cardValidator.element(this._month),
  this.cardValidator.element(this._cvc)];

  return $.inArray(false, isValid) === -1 ? true : false;
};

/**
 * In progress view
 *
 * @return {Jeffrey} - jeffrey object
 */
prototype.inProgress = function inProgress(){
  this.update(this.inProgressTpl);

  return this;
};

/**
 * Done template: can be error or done page
 *
 * @param  {Object} err - error on checkout
 * @param  {Object} data - data from checkout
 * @return {Jeffrey} - jeffrey object
 */
prototype.done = function done(err, data){
  this.update(this.doneTpl);

  return this;
};

/**
 * Back to home
 *
 * @return {Jeffrey} - jeffrey object
 */
prototype.backToHome = function backToHome(){
  page('/');

  return this;
};

module.exports = new Jeffrey();
