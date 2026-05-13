export const users = [
  {id:1, name:'Ana Perez', email:'ana.perez@espe.edu.ec', role:'USER', active:true},
  {id:2, name:'Admin', email:'admin@espe.edu.ec', role:'ADMIN', active:true}
]

export const lostItems = [
  {id:1, name:'Mochila negra', description:'Mochila con logo', category:'Bags', location_found:'Library', date_found:'2026-05-01', status:'FOUND', image_url:'https://via.placeholder.com/300', active:true, user_id:2},
  {id:2, name:'Calculadora', description:'TI-84', category:'Electronics', location_found:'Engineering Building', date_found:'2026-05-03', status:'CLAIMED', image_url:'https://via.placeholder.com/300', active:true, user_id:1}
]

export const claims = [
  {id:1, claim_date:'2026-05-04', observation:'La mochila es mia', status:'PENDING', user_id:1, item_id:1},
  {id:2, claim_date:'2026-05-05', observation:'Calculadora', status:'APPROVED', user_id:1, item_id:2}
]
