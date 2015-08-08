'use strict';

// Setting up route
angular.module('users').config(['$stateProvider',
    function ($stateProvider) {
        // Users state routing
        $stateProvider.
        state('profile', {
            url: '/settings/profile',
            templateUrl: 'modules/users/views/settings/edit-profile.client.view.html'
        }).
        state('password', {
            url: '/settings/password',
            templateUrl: 'modules/users/views/settings/change-password.client.view.html'
        }).
        state('accounts', {
            url: '/settings/accounts',
            templateUrl: 'modules/users/views/settings/social-accounts.client.view.html'
        }).
        state('signup', {
            url: '/signup',
            templateUrl: 'modules/users/views/authentication/signup.client.view.html'
        }).
        state('signin', {
            url: '/signin',
            templateUrl: 'modules/users/views/authentication/signin.client.view.html'
        }).
        state('fouryearplan', {
            url: '/fouryearplan',
            templateUrl: 'modules/core/views/timeline.client.view.html'
        }).
        state('calendar', {
            url: '/calendar',
            templateUrl: 'modules/core/views/calendar.client.view.html'
        }).
        state('gradclub', {
            url: '/gradclub',
            templateUrl: 'modules/core/views/construction.client.view.html'
        }).
        state('tools', {
            url: '/tools',
            templateUrl: 'modules/core/views/tools.client.view.html'
        }).
        state('freshman', {
            url: '/freshman',
            templateUrl: 'modules/core/views/tools/freshman.client.view.html'
        }).
        state('sophomore', {
            url: '/sophomore',
            templateUrl: 'modules/core/views/tools/sophomore.client.view.html'
        }).
        state('junior', {
            url: '/junior',
            templateUrl: 'modules/core/views/tools/junior.client.view.html'
        }).
        state('senior', {
            url: '/senior',
            templateUrl: 'modules/core/views/tools/senior.client.view.html'
        }).
        state('job', {
            url: '/job',
            templateUrl: 'modules/core/views/tools/job.client.view.html'
        }).
        state('intern', {
            url: '/intern',
            templateUrl: 'modules/core/views/tools/intern.client.view.html'
        }).
        state('more', {
            url: '/more',
            templateUrl: 'modules/core/views/more.client.view.html'
        }).
        state('forgot', {
            url: '/password/forgot',
            templateUrl: 'modules/users/views/password/forgot-password.client.view.html'
        }).
        state('reset-invalid', {
            url: '/password/reset/invalid',
            templateUrl: 'modules/users/views/password/reset-password-invalid.client.view.html'
        }).
        state('reset-success', {
            url: '/password/reset/success',
            templateUrl: 'modules/users/views/password/reset-password-success.client.view.html'
        }).
        state('reset', {
            url: '/password/reset/:token',
            templateUrl: 'modules/users/views/password/reset-password.client.view.html'
        });
    }
]);
