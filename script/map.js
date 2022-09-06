let myMap;
const init = () => {
 myMap = new ymaps.Map("map", {
   center: [47.202720, 39.747353],
   zoom: 12,
   controls: [],
 });
 
 let coords = [
     [47.250067, 39.698458],
     [47.224420, 39.732628]
   ],
   myCollection = new ymaps.GeoObjectCollection({}, {
     draggable: false,
     iconLayout: 'default#image',
     iconImageHref: './img/pointmap.svg',
     iconImageSize: [46, 57],
     iconImageOffset: [-35, -52]
   });
 
 for (let i = 0; i < coords.length; i++) {
   myCollection.add(new ymaps.Placemark(coords[i]));
 }
 
 myMap.geoObjects.add(myCollection);
 
 myMap.behaviors.disable('scrollZoom');
};
 
ymaps.ready(init);