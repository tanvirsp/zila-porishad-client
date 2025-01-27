
import Skeleton from "react-loading-skeleton";

const RowSkeleton = () => {
    return (
        <tr>
            <td colSpan = "9" >  <Skeleton count={4} /></td>
        </tr>
    );
};

export default RowSkeleton;

