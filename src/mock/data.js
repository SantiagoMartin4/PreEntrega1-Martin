import imagen from '../assets/img/carrito.png'

const list = [
    {id: '1', category:'notebooks' ,name: 'Vivobook', stock: 10, price: 1000, description: 'lorem 01', img: imagen},
    {id: '2', category:'placasgpu', name: 'RTX', stock: 20, price: 2000, description: 'lorem 02', img: imagen},
    {id: '3', category:'placasgpu', name: 'Nvidia', stock: 30, price: 3000, description: 'lorem 03', img: imagen},
    {id: '4', category:'perifericos', name: 'Logitech m90', stock: 50, price: 3000, description: 'lorem 04', img: imagen},
    {id: '5', category:'monitores', name: 'Asus 27"', stock: 15, price: 3000, description: 'lorem 05', img: imagen},
    {id: '6', category:'impresoras', name: 'Ecotank', stock: 80, price: 3000, description: 'lorem 06', img: imagen},
]

export const getProducts = () => {
    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve(list)
        },2000)
})
}

export const getItem = (id) =>{
    return new Promise((resolve) =>{
        setTimeout(()=> {
            resolve(list.find((item)=> item.id === id))
        },2000)
    })
}