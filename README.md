# KICK STRIPE

> Save customer and charge credit card With Stripe API

## Keynote

Checkout form example with the [Stripe API](https://stripe.com/docs).

## Installation

```sh
❯ curl -sS https://getcomposer.org/installer | php
❯ php composer.phar install
❯ npm install
```

[Stripe PHP](https://github.com/stripe/stripe-php) vendor is installed via Composer.

### Dist files with [browserify](http://browserify.org/)

```sh
❯ npm run dist
```

Then open http://localhost/index.html

## Stripe keys

* Secret API key

Update the [checkout.php](./lib/checkout.php) file:

```php
\Stripe\Stripe::setApiKey("YOUR-STRIPE-API-KEY");
```

* Publishable API key

Update the [checkout.js](./lib/checkout.js) file:

```js
prototype.TOKEN = 'YOUR-PUBLISHABLE-API-KEY';
```

## Licence

[Uncopyrighted](http://zenhabits.net/uncopyright/)
