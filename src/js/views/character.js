import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import starWars800x600 from "../../img/star-wars-800x600.jpg";
import { Context } from "../store/appContext";
import { ItemDetails } from "../component/item-details";

export const Character = () => {
	const [character, setCharacter] = useState({});
	const { actions } = useContext(Context);
	let { name } = useParams();

	useEffect(() => {
		name = decodeURIComponent(name);

		let character = actions.getCharacterByName(name);
		if (character) {
			setCharacter(character);
		} else {
			//TODO
			alert(character);
		}
	}, []);

	function parseDetailsToItemDetails(object) {
		return [
			{
				label: "Gender",
				value: object.gender
			},
			{
				label: "Hair Color",
				value: object.hair_color
			},
			{
				label: "Height",
				value: object.height
			},
			{
				label: "Mass",
				value: object.mass
			},
			{
				label: "Skin Color",
				value: object.skin_color
			},
			{
				label: "Birth Year",
				value: object.birth_year
			}
		];
	}

	const itemDetails = parseDetailsToItemDetails(character);
	const description =
		"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Ut eu mollis erat." +
		" Duis sed justo orci. Mauris a lacus vel erat congue aliquam. " +
		" Fusce sit amet pellentesque enim, nec interdum diam. Phasellus consequat dolor magna." +
		" Nam malesuada felis ac lectus volutpat varius. Suspendisse quis quam semper," +
		" hendrerit mauris nec, eleifend.";

	return <ItemDetails title={character.name} description={description} details={itemDetails} />;
};
