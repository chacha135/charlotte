var wms_layers = [];

var lyr_lycee_2022_georeftif_0 = new ol.layer.Image({
        opacity: 1,
        
    title: 'lycee_2022_georef.tif<br />' ,
        
        
        source: new ol.source.ImageStatic({
            url: "./layers/lycee_2022_georeftif_0.png",
            attributions: ' ',
            projection: 'EPSG:3857',
            alwaysInRange: true,
            imageExtent: [541793.240792, 5450755.857027, 544052.580204, 5452549.290022]
        })
    });
var format_exemple_tracetracks_1 = new ol.format.GeoJSON();
var features_exemple_tracetracks_1 = format_exemple_tracetracks_1.readFeatures(json_exemple_tracetracks_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_exemple_tracetracks_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_exemple_tracetracks_1.addFeatures(features_exemple_tracetracks_1);
var lyr_exemple_tracetracks_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_exemple_tracetracks_1, 
                style: style_exemple_tracetracks_1,
                popuplayertitle: 'exemple_trace, tracks',
                interactive: true,
                title: '<img src="styles/legend/exemple_tracetracks_1.png" /> exemple_trace, tracks'
            });
var format_point_ecoute_2 = new ol.format.GeoJSON();
var features_point_ecoute_2 = format_point_ecoute_2.readFeatures(json_point_ecoute_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_point_ecoute_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_point_ecoute_2.addFeatures(features_point_ecoute_2);
var lyr_point_ecoute_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_point_ecoute_2, 
                style: style_point_ecoute_2,
                popuplayertitle: 'point_ecoute',
                interactive: true,
                title: '<img src="styles/legend/point_ecoute_2.png" /> point_ecoute'
            });
var format_obsrevation_oiseaux_L93_3 = new ol.format.GeoJSON();
var features_obsrevation_oiseaux_L93_3 = format_obsrevation_oiseaux_L93_3.readFeatures(json_obsrevation_oiseaux_L93_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_obsrevation_oiseaux_L93_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_obsrevation_oiseaux_L93_3.addFeatures(features_obsrevation_oiseaux_L93_3);
var lyr_obsrevation_oiseaux_L93_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_obsrevation_oiseaux_L93_3, 
                style: style_obsrevation_oiseaux_L93_3,
                popuplayertitle: 'obsrevation_oiseaux_L93',
                interactive: true,
                title: '<img src="styles/legend/obsrevation_oiseaux_L93_3.png" /> obsrevation_oiseaux_L93'
            });

lyr_lycee_2022_georeftif_0.setVisible(true);lyr_exemple_tracetracks_1.setVisible(true);lyr_point_ecoute_2.setVisible(true);lyr_obsrevation_oiseaux_L93_3.setVisible(true);
var layersList = [lyr_lycee_2022_georeftif_0,lyr_exemple_tracetracks_1,lyr_point_ecoute_2,lyr_obsrevation_oiseaux_L93_3];
lyr_exemple_tracetracks_1.set('fieldAliases', {'name': 'name', 'symbol': 'symbol', 'number': 'number', 'comment': 'comment', 'description': 'description', 'source': 'source', 'url': 'url', 'url name': 'url name', });
lyr_point_ecoute_2.set('fieldAliases', {'numero': 'numero', });
lyr_obsrevation_oiseaux_L93_3.set('fieldAliases', {'nom_oiseau': 'nom_oiseau', 'nombre': 'nombre', 'type_cont': 'type_cont', });
lyr_exemple_tracetracks_1.set('fieldImages', {'name': 'TextEdit', 'symbol': 'TextEdit', 'number': 'Range', 'comment': 'TextEdit', 'description': 'TextEdit', 'source': 'TextEdit', 'url': 'TextEdit', 'url name': 'TextEdit', });
lyr_point_ecoute_2.set('fieldImages', {'numero': 'Range', });
lyr_obsrevation_oiseaux_L93_3.set('fieldImages', {'nom_oiseau': '', 'nombre': '', 'type_cont': '', });
lyr_exemple_tracetracks_1.set('fieldLabels', {'name': 'no label', 'symbol': 'no label', 'number': 'no label', 'comment': 'no label', 'description': 'no label', 'source': 'no label', 'url': 'no label', 'url name': 'no label', });
lyr_point_ecoute_2.set('fieldLabels', {'numero': 'no label', });
lyr_obsrevation_oiseaux_L93_3.set('fieldLabels', {'nom_oiseau': 'no label', 'nombre': 'no label', 'type_cont': 'no label', });
lyr_obsrevation_oiseaux_L93_3.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});