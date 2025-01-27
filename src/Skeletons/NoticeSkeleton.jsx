import Skeleton from "react-loading-skeleton";


const NoticeSkeleton = () => {
    return (
        <li className="d-block"><Skeleton count={4} /></li>
    );
};

export default NoticeSkeleton;