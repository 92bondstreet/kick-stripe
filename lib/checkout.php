<?php
require_once('../vendor/autoload.php');
header('Content-type: application/json');

if ($_POST) {
  \Stripe\Stripe::setApiKey("YOUR-STRIPE-API-KEY");

  try {
    if (!isset($_POST['stripeToken'])){
      echo json_encode(array("error" => "no_token"));
      return;
    }

    // Decode token and metadata
    $token = $_POST['stripeToken'];
    $firstName = $_POST['firstName'];
    $email = $_POST['email'];
    $address = $_POST['address'];
    $country = "France";
    $town = $_POST['town'];
    $zipcode = $_POST['zipcode'];
    $phone = $_POST['phone'];

    $metadata = array("Nom de famille" => $firstName,
      "Email" => $email,
      "Adresse" => $address,
      "Pays" => $country,
      "Ville" => $town,
      "Code postal" => $zipcode,
      "Téléphone" => $phone
    );

    $description = $firstName." - ". $email;

    // Create a Customer
    $customer = \Stripe\Customer::create(array(
      "source" => $token,
      "email" => $email,
      "description" => $description,
      "metadata" => $metadata )
    );

    echo json_encode(array("status" => "save"));
  }
  catch (Exception $e) {
    echo json_encode(array("error" => "exception", "message" => $e->getMessage()));
  }
}
else{
  echo json_encode(array("error" => "no_data"));
}
?>
