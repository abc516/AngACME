/**
 * Created by anton on 9/20/16.
 */
(function () {
    "use strict"

    var app = angular
        .module("productResourceMock",
                ["ngMockE2E"])
    
    app.run(function ($httpBackend) {
        var products = [
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

        var productUrl = "/app/products"

        var editingRegex = new RegExp(productUrl + "/[0-9][0-9]*", '')
        $httpBackend.whenGET(editingRegex).respond(function (method, url, data) {
            var product = {"productId": 0};
            var parameters = url.split('/')
            var length = parameters.length;
            var id = parameters[length - 1]

            if(id > 0) {
                for (var i = 0; i < products.length; i++) {
                    if (products[i].productId == id){
                        product = product[i]
                        break;
                    }
                };
            }
            return [200, product, {}]
        })

        $httpBackend.whenPOST(productUrl).respond(function (method, url, data) {
            var product = angular.fromJson(data)

            if(!product.productId){
                //new product
                product.productId = products[product.length - 1].productId + 1;
                products.push(product)
            }
            else{
                //Updated product
                for (var i = 0; i < products.length; i++) {
                    if(products[i].productId == product.productId){
                        products[i] = product;
                        break;
                    }
                }
            }
            return [200, product, {}]

        })

        //Pass through any requests for application files
        $httpBackend.whenGET(/app/).passThrough()
    })
}())