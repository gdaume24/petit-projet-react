import creditCardImage from '../../assets/carte_bleue.jpeg';

function CarteBleue({ widthSize = '300px' }) {
    return (
        <img src={creditCardImage} alt="Carte Bleue" style={{ 
            width: widthSize, 
            height: 'auto' }}  />
    )
}

export default CarteBleue;