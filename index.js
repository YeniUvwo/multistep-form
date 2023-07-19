$(document).ready(function(){

  function validateEmail(email) {
    var emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailPattern.test(email);
  }

  function validatePhoneNumber(phoneNumber) {
    var phonePattern = /^\+?[1-9]\d{1,14}$/;
    return phonePattern.test(phoneNumber);
  }

  $('#designOneBtn').click(function(event){
    event.preventDefault();

    var input = $('#myInput').val();
    var email = $('#emailInput').val();
    var phone = $('#phoneInput').val();

    var isEmailValid = validateEmail(email);
    var isPhoneValid = validatePhoneNumber(phone);

    $('.error-message').hide();
    $('input').removeClass('error-style');

    var isValid = true;

  if (input === ''){
    $('.error-message').show();
    $('input').addClass('error-style');
    isValid = false;
  } 

  if (!isEmailValid) {
    $('.email-error').text('Invalid email address.').show();
    $('#emailInput').addClass('error-style');
    isValid = false;
  } 

  if (!isPhoneValid) {
    $('.phone-error').text('Invalid phone number.').show();
    $('#phoneInput').addClass('error-style');
    isValid = false;
  } 
  
  if (isValid) {
    $('.design-one').hide();
    $('.design-two-monthly').show();
    $('#noOne').removeClass('sidebar-number-style');
    $('#noTwo').addClass('sidebar-number-style');
  }
  });


  $('#designTwoMBtn').click(function(){
    $('.design-two-monthly').hide();
    $('.design-two-yearly').show();
    $('#noTwo').addClass('sidebar-number-style');
  });

  $('#designTwoYBtn').click(function(){
    $('.design-two-yearly').hide();
    $('.design-three-monthly').show();
    $('#noTwo').removeClass('sidebar-number-style');
    $('#noThree').addClass('sidebar-number-style');
  });

  $('#designThreeMBtn').click(function(){
    $('.design-three-monthly').hide();
    $('.design-three-yearly').show();
    $('#noThree').addClass('sidebar-number-style');
  });

  $('#designThreeYBtn').click(function(){
    $('.design-three-yearly').hide();
    $('.design-four-monthly').show();
    $('#noThree').removeClass('sidebar-number-style');
    $('#noFour').addClass('sidebar-number-style');
  });

  $('#designFourMBtn').click(function(){
    $('.design-four-monthly').hide();
    $('.design-four-yearly').show();
    $('#noFour').addClass('sidebar-number-style');
  });

  $('#designFourYBtn').click(function(){
    $('.design-four-yearly').hide();
    $('.thankyou-design').show();
    $('#noFour').removeClass('sidebar-number-style');
  });

  $('.thankyou-design').hide();

  $(".monthly-plan, .yearly-plan").on("click", function(){

    $(".plan-focus").removeClass("focus");
    $(this).toggleClass("focus");
  });

  $(".check-container input").on("click", function(){
  
    var addonElement = $(this).closest(".addon");
    addonElement.toggleClass("focus");
  });

  $('.otherBtnTwoM').click(function(){
    $('.design-two-monthly').hide();
    $('.design-one').show();
    $('#noOne').addClass('sidebar-number-style');
    $('#noTwo').removeClass('sidebar-number-style');
  });

  $('.otherBtnTwoY').click(function(){
    $('.design-two-yearly').hide();
    $('.design-two-monthly').show();
    $('#noTwo').addClass('sidebar-number-style');
  });

  $('.otherBtnThreeM').click(function(){
    $('.design-three-monthly').hide();
    $('.design-two-yearly').show();
    $('#noTwo').addClass('sidebar-number-style');
    $('#noThree').removeClass('sidebar-number-style');
  });

  $('.otherBtnThreeY').click(function(){
    $('.design-three-yearly').hide();
    $('.design-three-monthly').show();
    $('#noThree').addClass('sidebar-number-style');
  });

  $('.otherBtnFourM').click(function(){
    $('.design-four-monthly').hide();
    $('.design-three-yearly').show();
    $('#noThree').addClass('sidebar-number-style');
    $('#noFour').removeClass('sidebar-number-style');
  });

  $('.otherBtnFourY').click(function(){
    $('.design-four-yearly').hide();
    $('.design-four-monthly').show();
    $('#noFour').addClass('sidebar-number-style');
  });

})