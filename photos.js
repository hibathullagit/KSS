// KSS photos
// Online: shows the newest photo and saves a copy on the phone.
// Offline: shows the last saved copy, or the photo packed in the app.
// Photo names come from PHOTOS in data.js.

var KSS_PHOTO_FOLDER = "https://hibathullagit.github.io/KSS/images/";
var KSS_PHOTO_CACHE = "kss-photos-v1";

var DEFAULT_PHOTOS = {
    "background": "bg-1.jpg",
    "kss-logo": "kss-logo.png",
    "logo-ksk-players": "team1.png",
    "logo-fk-players": "fighters-logo.png",
    "logo-ksk-page": "ksk-logo.png",
    "logo-fk-page": "fk-logo.png",
    "icon-players": "Players.png",
    "icon-scoreboard": "Scoreboard.png",
    "icon-statistics": "Statistics.png",
    "icon-gallery": "Gallery.png",
    "icon-fixtures": "Fixtures.png",
    "icon-calculator": "Calculator.png",
    "AJMAL": "player1.png",
    "MIDLAJ": "player2.png",
    "HASBULLA": "player3.png",
    "SHALU": "player4.png",
    "SADIQ": "player5.png",
    "SHUHAIB": "fplayer1.png",
    "ASJAL": "fplayer2.png",
    "HIBATHULLA": "fplayer3.png",
    "JASIR": "fplayer4.png",
    "SADAQATHULLA": "fplayer5.png",
    "JASAL": "fplayer6.png"
};

// Gives the file name for a key, e.g. "AJMAL" -> "player1.png".
// A name set in data.js (PHOTOS) wins over the default here.
function kssPhotoName(key) {
    if (typeof PHOTOS !== "undefined" && PHOTOS[key]) return PHOTOS[key];
    return DEFAULT_PHOTOS[key] || "";
}

// Shows a photo by key (background, icon, logo or player name)
function kssPhoto(img, key) {
    var file = kssPhotoName(key);
    if (file) kssShowFile(img, file);
}

// Shows a photo by file path inside images, e.g. "gallery/m1-1.jpg"
function kssShowFile(img, file) {
    var url = KSS_PHOTO_FOLDER + file;
    var packed = "images/" + file;
    var canCache = ("caches" in window) && window.isSecureContext;

    function showBlob(blob) {
        img.src = URL.createObjectURL(blob);
    }

    // 1. Show the saved copy straight away, if there is one
    var saved = canCache
        ? caches.open(KSS_PHOTO_CACHE).then(function (c) { return c.match(url); })
        : Promise.resolve(null);

    saved.then(function (hit) {
        if (hit) return hit.blob().then(showBlob);
        img.src = packed;   // nothing saved yet: use the packed copy for now
    }).catch(function () {
        img.src = packed;
    }).then(function () {
        // 2. Then try the newest photo online
        return fetch(url + "?t=" + Date.now(), { cache: "no-store" });
    }).then(function (r) {
        if (!r.ok) throw new Error("not found");
        if (!canCache) return r.blob().then(showBlob);
        return caches.open(KSS_PHOTO_CACHE).then(function (c) {
            return c.put(url, r.clone());
        }).then(function () {
            return r.blob().then(showBlob);
        });
    }).catch(function () {
        // Offline or not found: keep the photo already showing
    });
}