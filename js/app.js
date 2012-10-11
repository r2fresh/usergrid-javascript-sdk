/**
*  dogs is a sample app  that is powered by Usergrid
*  This app shows how to use the Usergrid SDK to connect
*  to Usergrid, how to add entities, and how to page through
*  a result set of entities
*
*  Learn more at http://Usergrid.com/docs
*
*   Copyright 2012 Apigee Corporation
*
*  Licensed under the Apache License, Version 2.0 (the "License");
*  you may not use this file except in compliance with the License.
*  You may obtain a copy of the License at
*
*      http://www.apache.org/licenses/LICENSE-2.0
*
*  Unless required by applicable law or agreed to in writing, software
*  distributed under the License is distributed on an "AS IS" BASIS,
*  WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
*  See the License for the specific language governing permissions and
*  limitations under the License.
*/

/**
*  @file app.js
*  @author Rod Simpson (rod@apigee.com)
*
*  This file contains the main program logic for Dogs.
*/
$(document).ready(function () {
   //first set the org / app path (must be orgname / appname or org id / app id - can't mix names and uuids!!)
   apigee.ApiClient.init('Apigee', 'sandbox');

   apigee.ApiClient.setApiUrl('http://nest-test.apigee.net/');
   //apigee.ApiClient.setApiUrl('http://api.usergrid.com/');
   
   //bind the show buttons
   $('#show-get').bind('click', function() {
      $('#main').hide();
      $('#get-page').show();
   });

   $('#show-post').bind('click', function() {
      $('#main').hide();
      $('#post-page').show();
   });

   $('#show-put').bind('click', function() {
      $('#main').hide();
      $('#put-page').show();
   });

   $('#show-delete').bind('click', function() {
      $('#main').hide();
      $('#delete-page').show();
   });

   $('#run-get').bind('click', function() {
      get();
   });

   $('#run-post').bind('click', function() {
      post();
   });

   $('#run-put').bind('click', function() {
      put();
   });

   $('#run-delete').bind('click', function() {
      deleteF();
   });

   

   //bind the create new dog button
   $('#cancel').bind('click', function() {
      $('#get-page').hide();
      $('#post-page').hide();
      $('#put-page').hide();
      $('#delete-page').hide();
      $('#main').show();
      $("#response").html('');
   });


   function get() {
      var path = $("#get-path").val();
      apigee.ApiClient.runAppQuery (new apigee.Query('GET', path, null, null,
         function(response) {
           var output = JSON.stringify(response);
           $("#response").html('<pre>'+output+'</pre>');
         },
         function (response) {
           $("#response").html('<pre>ERROR: '+response+'</pre>');
         }
      ));
   }

   function post() {
      var path = $("#post-path").val();
      var data = $("#post-data").val();
      data = JSON.parse(data);
      apigee.ApiClient.runAppQuery (new apigee.Query('POST', path, data, null,
         function(response) {
           var output = JSON.stringify(response);
           $("#response").html('<pre>'+output+'</pre>');
         },
         function (response) {
           $("#response").html('<pre>ERROR: '+response+'</pre>');
         }
      ));
   }

   function put() {
      var path = $("#put-path").val();
      var data = $("#put-data").val();
      data = JSON.parse(data);
      apigee.ApiClient.runAppQuery (new apigee.Query('PUT', path, data, null,
         function(response) {
           var output = JSON.stringify(response);
           $("#response").html('<pre>'+output+'</pre>');
         },
         function (response) {
           $("#response").html('<pre>ERROR: '+response+'</pre>');
         }
      ));
   }

    function deleteF() {
      var path = $("#delete-path").val();
      apigee.ApiClient.runAppQuery (new apigee.Query('DELETE', path, null, null,
         function(response) {
           var output = JSON.stringify(response);
           $("#response").html('<pre>'+output+'</pre>');
         },
         function (response) {
           $("#response").html('<pre>ERROR: '+response+'</pre>');
         }
      ));
   }

});