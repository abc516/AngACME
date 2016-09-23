/**
 * Created by anton on 9/20/16.
 */
(function () {
    "use strict"

    angular
        .module("common.services")
        .factory("productResource",
                ["$resource",
                productResource])

    function productResource($resource) {
        return $resource("/app/products/:productId")
    }

}())