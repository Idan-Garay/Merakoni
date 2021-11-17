import React from 'react';

const Acquired = ({point, array}) => {
    const badges = array.map(badge =>{
        if(point >= badge.point){
            return (
                <div className="badges">
                    <img src={require(`./Images/${badge.src}.png`)} alt=""/>
                    <p>{badge.title}</p>
                </div>
            )
        }
    })
    return (
        <div className="badgeList">
            {badges}
        </div>
    );
}

export default Acquired;