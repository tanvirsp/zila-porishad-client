/* eslint-disable react/prop-types */

import box from '../assets/box.png'

const Empty = () => {
    return (
        <tr className='text-center p-2'>
            <td colSpan={4}>
                <img width="100px" src={box} alt="Empty Box" />
                <p>এই মূহুর্তে কোন নোটিশ নেই</p>
            </td>
        </tr>
    );
};

export default Empty;