window.onload = () => {
    let testEntityAdded = false;
    let entity = null;

    const el = document.querySelector("[gps-new-camera]");
    const rotate_b = document.getElementById('rotate');
    const size_b= document.getElementById('size');

    el.addEventListener("gps-camera-update-position", e => {
        if(!testEntityAdded) {
            alert(`Recived GPS Signal Please Press OK to Load Model`);
            // Add a box to the north of the initial GPS position
            entity = document.createElement("a-entity");
            entity.setAttribute('gltf-model', 'url(./assets/venus/scene.gltf)');
            entity.setAttribute("scale", {
                x: 0.5, 
                y: 0.5,
                z: 0.5
            });
            
            entity.setAttribute('gps-new-entity-place', {
                latitude: e.detail.position.latitude + 0.001,
                longitude: e.detail.position.longitude
            });
            document.querySelector("a-scene").appendChild(entity);
        }
        testEntityAdded = true;
    });

    let r_c=0;
    rotate_b.addEventListener('click', function() {

        if(r_c==0){
            entity.setAttribute("rotation", { x: 0, y: 90, z: 0});
            r_c++;
        }else if(r_c==1){
            entity.setAttribute("rotation", { x: 0, y: 180, z: 0});
            r_c++;
        }else if(r_c==2){
            entity.setAttribute("rotation", { x: 0, y: 270, z: 0});
            r_c++;
        }else{
            entity.setAttribute("rotation", { x: 0, y: 0, z: 0});
            r_c=0;
        }

        
    });

    let s_var=0;
    size_b.addEventListener('click', function() {

        if(s_var==0){
            entity.setAttribute("scale", {x: 1, y: 1, z: 1});
            s_var++;
        }else if(s_var==1){
            entity.setAttribute("scale", {x: 1.5, y: 1.5, z: 1.5});
            s_var++;
        }else{
            entity.setAttribute("scale", {x: 0.5, y: 0.5, z: 0.5});
            s_var=0;
        }

    });

   
};
