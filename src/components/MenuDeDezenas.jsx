import Dezena from './Dezena'

function MenuDeDezenas({ quantidadeDezenas }) {

    let dezenas = [];

    for (let i = 1; i <= quantidadeDezenas; i++) {
        const dezena = <Dezena number={i} key={i} id={"dezena-" + { i }} />;
        dezenas.push(dezena);
    }

    return (

        <div className='flex items-center justify-center w-36 h-100'>
            <div className="grid grid-cols-3	">
                {dezenas}
            </div>
        </div>
    )
}

export default MenuDeDezenas;
