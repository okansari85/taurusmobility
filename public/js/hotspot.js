jQuery(".hotspot").each(function () {
    var $this = jQuery(this),
        top = $this.data("top"),
        left = $this.data("left");

    jQuery(this)
        .css({
            top: top + "%",
            left: left + "%"
        })
        .addClass("is-visible");
});

jQuery(".hotspots-label").on("click", function (e) {
    jQuery(this).removeClass("is-visible");
    jQuery(this).parents(".image").find(".hotspot").removeClass("is-active");
    e.preventDefault();
});

jQuery(".hotspot").on("click", function (e) {
    var text = jQuery(this).data("text");
    if (!jQuery(this).hasClass("is-active")) {
        jQuery(this).parents(".image").find(".hotspot").removeClass("is-active");
        jQuery(this).addClass("is-active");
        jQuery(this)
            .parents(".image")
            .find(".hotspots-label")
            .html("<strong>" + jQuery(this).text() + "</strong> <span>" + text + "</span>")
            .addClass("is-visible");
    } else {
        jQuery(this).removeClass("is-active");
        jQuery(this)
            .parents(".image")
            .find(".hotspots-label")
            .html("<strong>" + jQuery(this).text() + "</strong> <span>" + text + "</span>")
            .removeClass("is-visible");
    }
    e.preventDefault();
});