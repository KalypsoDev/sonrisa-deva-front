const CardWithIcon = ({ 
  backgroundColor,
  color,
  title,
  Icon,
  // colorIcon,
  subtitle,
}) => {

  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (

      <div className={`max-w-sm p-6 bg-${backgroundColor} border border-gray-200 rounded-lg`} style={shadowStyle}>
            <h3 className={`text-base p-4 md:text-lg font-montserratBold text-center mb-4 text-${color}`}>{title}</h3>
            {<Icon />}
            {/* {<Icon className={`p-6 text-${colorIcon}`}/>} */}
            {subtitle !== undefined && <p className={`text-base p-4 md:text-lg font-montserratRegular text-center mb-4 text-${color}`}>{subtitle}</p>}
      </div>
  );
};

export default CardWithIcon;