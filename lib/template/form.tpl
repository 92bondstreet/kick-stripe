<div class="container-fluid container-fixed-lg">
  <div id="rootwizard" class="m-t-50">

    <ul class="nav nav-tabs nav-tabs-linetriangle nav-tabs-separator nav-stack-sm">
      <li class="active">
        <a data-toggle="tab" href="#paiement"><i class="fa fa-credit-card tab-icon"></i> <span>Vous ne payez rien tant que vous n’avez pas accepté un devis.</span></a>
      </li>
    </ul>

    <div class="tab-content">
      <div class="tab-pane slide-left padding-20 active" id="paiement">
        <div class="row row-same-height">
          <div class="col-md-5 b-r b-dashed b-grey ">
            <div class="padding-30">
              <form role="form" id="contact" method="POST">
                <p>Informations personnelles</p>
                <div class="form-group-attached">
                  <div class="row clearfix">
                    <div class="col-sm-6">
                      <div class="form-group form-group-default required">
                        <label>Nom de famille</label>
                        <input name="firstName" type="text" class="form-control" required>
                      </div>
                    </div>
                    <div class="col-sm-6">
                      <div class="form-group form-group-default">
                        <label>Prénom</label>
                        <input name="lastName" type="text" class="form-control">
                      </div>
                    </div>
                  </div>
                  <div class="form-group form-group-default required">
                    <label>Email</label>
                    <input name="email" type="text" class="form-control email" required>
                  </div>
                </div>
                <br>
                <p>Adresse de livraison</p>
                <div class="form-group-attached">
                  <div class="form-group form-group-default required">
                    <label>Adresse</label>
                    <input name="address" type="text" class="form-control" placeholder="Adresse complète (numéro, rue, bâtiment, digicode...)" required>
                  </div>
                  <div class="row clearfix">
                    <div class="col-sm-12">
                      <div class="form-group form-group-default disabled">
                        <label>Pays</label>
                        <input type="text" class="form-control" value="France" disabled>
                      </div>
                    </div>
                  </div>
                  <div class="row clearfix">
                    <div class="col-sm-8">
                      <div class="form-group form-group-default required">
                        <label>Ville</label>
                        <input name="town" type="text" class="form-control" required>
                      </div>
                    </div>
                    <div class="col-sm-4">
                      <div class="form-group form-group-default required">
                        <label>Code postal</label>
                        <input name="zipcode" type="text" class="form-control digits" minlength="5" maxlength="5" required>
                      </div>
                    </div>
                  </div>
                  <div class="row clearfix">
                    <div class="col-sm-12">
                      <div class="form-group form-group-default required">
                        <label>Numéro de téléphone</label>
                        <input name="phone" type="text" class="form-control digits" placeholder="0612345678" minlength="10" maxlength="10" required>
                      </div>
                    </div>
                  </div>
                </div>
                <div class="checkbox check-success">
                  <input type="checkbox" value="1" id="checkbox-agree" aria-invalid="false">
                  <label for="checkbox-agree">J'ai lu et j'accepte les conditions générales de vente</label>
                </div>
              </form>
            </div>

          </div>
          <div class="col-md-7">
            <div class="padding-30">
              <form role="form" id="card">
                <div class="bg-master-light padding-30 b-rad-lg">
                  <h2 class="pull-left no-margin">Paiement</h2>
                  <ul class="list-unstyled pull-right list-inline no-margin">
                    <li>
                      <a href="#">
                        <img width="51" height="32" data-src-retina="assets/img/form-wizard/visa2x.png" data-src="assets/img/form-wizard/visa.png" class="brand" alt="logo" src="assets/img/form-wizard/visa.png">
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hint-text">
                        <img width="51" height="32" data-src-retina="assets/img/form-wizard/amex2x.png" data-src="assets/img/form-wizard/amex.png" class="brand" alt="logo" src="assets/img/form-wizard/amex.png">
                      </a>
                    </li>
                    <li>
                      <a href="#" class="hint-text">
                        <img width="51" height="32" data-src-retina="assets/img/form-wizard/mastercard2x.png" data-src="assets/img/form-wizard/mastercard.png" class="brand" alt="logo" src="assets/img/form-wizard/mastercard.png">
                      </a>
                    </li>
                  </ul>
                  <div class="clearfix"></div>
                  <div class="form-group-attached form-group form-group-default required m-t-25">
                    <label>Titulaire de la carte</label>
                    <input type="text" class="form-control" data-stripe="owner" required>
                  </div>
                  <div class="form-group-attached form-group form-group-default required">
                    <label>Numéro de carte</label>
                    <input type="text" class="form-control creditcard" data-stripe="number" required>
                  </div>
                  <div class="row">
                    <div class="col-md-6">
                      <label>Date d'expiration</label>
                      <br>
                      <div class="form-group-attached">
                        <div class="row clearfix">
                          <div class="col-sm-6">
                            <div class="form-group-attached form-group form-group-default required">
                              <label>Mois</label>
                              <input type="text" class="form-control digits" data-stripe="exp-month" placeholder="01" min="01" max="12" minlength="2" maxlength="2" required>
                            </div>
                          </div>
                          <div class="col-sm-6">
                            <div class="form-group-attached form-group form-group-default required">
                              <label>Année</label>
                              <input type="text" class="form-control digits" data-stripe="exp-year" placeholder="2015" minlength="4" maxlength="4" required>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                    <div class="col-md-3 col-md-offset-3">
                      <label>Cryptogramme</label>
                      <br>
                      <div class="form-group-attached">
                        <div class="row clearfix">
                          <div class="form-group-attached form-group form-group-default required">
                            <label>CVC</label>
                            <input type="text" class="form-control digits" placeholder="000" data-stripe="cvc" minlength="3" maxlength="3" required>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </form>
              <div class="p-t-10">
                <div class="col-lg-12 col-md-12">
                  <p class="no-margin">Paiment sécurisé assuré par Stripe.</p>
                  <p class="small hint-text">
                    Stripe s’appuie sur les dernières normes de sécurité et ne dispose à aucun moment de vos informations bancaires. Celles-ci sont directement transmises à son partenaire bancaire via la technologie SSL qui garantit un paiement 100% sécurisé.
                    <a href="#">Cliquez ici pour en savoir plus.</a>
                  </p>
                </div>
              </div>
            </div>
            <div class="padding-20 bg-white">
              <ul class="pager wizard">
                <li class="next">
                  <button class="btn btn-success btn-cons btn-animated from-left fa fa-credit-card pull-right" id="checkout" type="button">
                    <span>S'inscrire</span>
                  </button>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </div>
    </div>
  </div>
</div>
