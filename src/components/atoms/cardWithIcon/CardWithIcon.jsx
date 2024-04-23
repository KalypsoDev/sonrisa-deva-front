const CardWithIcon = ({ 
  backgroundColor,
  color,
  title,
  Icon,
  iconColor,
  subtitle,
}) => {

  const shadowStyle = {
    boxShadow: '11px 10px 4px rgba(233, 241, 245, 0.7)'
  };

  return (

      <div className={`flex flex-col justify-center m-4 w-56 h-48 md:w-72 md:h-72 p-6 bg-${backgroundColor} border border-gray-200 rounded-lg`} style={shadowStyle}>
            <h3 className={`text-lg p-4 md:text-xl font-montserratBold text-center mb-4 text-${color}`}>{title}</h3>
            {Icon && <Icon className={`text-${iconColor} text-8xl mx-auto`} />}
            {subtitle !== undefined && <p className={`text-lg p-4 md:text-xl font-montserratRegular text-center mb-4 text-${color}`}>{subtitle}</p>}
      </div>
  );
};

export default CardWithIcon;