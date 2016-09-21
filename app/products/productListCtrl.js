/**
 * Created by anton on 9/19/16.
 */
(function () {
    "use strict"

    angular
        .module("productManagement")
        .controller("ProductListCtrl",
                    ProductListCtrl);

    function ProductListCtrl() {
        var vm = this;
        vm.products = [
            {
                "productId": 1,
                "productName": "Rake",
                "productCode": "GDN-0011",
                "releaseDate": "March 19, 2009",
                "description": "Leaf rake with 48-inch handle.",
                "cost": 9.00,
                "price": 19.95,
                "category": "garden",
                "tags": ["leaf", "tool"],
                "imageUrl": "https://openclipart.org/download/244213/cybercooty-rateau.svg"
            },
            {
                "productId": 5,
                "productName": "Hammer",
                "productCode": "TBX-0048",
                "releaseDate": "May 21, 2013",
                "description": "Curved claw steel hammer",
                "cost": 1.00,
                "price": 8.99,
                "category": "toolbox",
                "tags": ["tool"],
                "imageUrl": "http://pngimg.com/upload/hammer_PNG3890.png"
            }
        ]
        vm.showImage = false

        vm.toggleImage = function () {
            vm.showImage = !vm.showImage;
        }
    }
}());