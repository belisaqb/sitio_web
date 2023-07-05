const app = Vue.createApp({
    data() {
        return {

            /////////////VIEWS////////////////
            view: 0,
            home: true,
            alert: false,
            guest: true,
            details: false,
            profile: false,
            forms: false,
            login: false,
            register: false,
            forgotPassword: false,            

            //////////DATA FORMS/////
            search: null,
            name: null,
            last_name: null,
            email: null,
            username: null,
            password: null, 
            token: "",
            message: "",

            log: console.log("works"),

            ///////Arrays/////////////
            recipes: [
                { id: 1, image: "./images/recipes/sushi.jpg", name: "Sushi", category: "Lunch", total_time: 31, servings: 10, level: "Intermedio", likes: 20, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings - here we've used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./images/recipes/fettuccine-alfredo.jpg", name: "Fettuccine Alfredo", category: "Dinner", total_time: 45, servings: 6, level: "Fácil", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./images/recipes/chicken-enchilada-casserole.jpg", name: "Chicken Enchilada Casserole", category: "Lunch", total_time: 20, servings: 8, level: "Díficil", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                { id: 4, image: "./images/recipes/big-mac.jpg", name: "Big Mac", category: "Dinner", total_time: 50, servings: 2, level: "Intermedio", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                { id: 5, image: "./images/recipes/banana-pancakes.jpg", name: "Banana Pancakes", category: "Breakfast", total_time: 60, servings: 4, level: "Díficil", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                { id: 6, image: "./images/recipes/chocolate-souffle.jpg", name: "Chocolate Souffle", category: "Dessert", total_time: 20, servings: 6, level: "Fácil", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don't open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                { id: 7, image: "./images/recipes/pina-colada.jpg", name: "Pina Colada", category: "Drinks", total_time: 35, servings: 10, level: "Intermedio", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
                { id: 8, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 9, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 10, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }
            ],
            categories: [
                // { id: 1, name: "main course" },
                // { id: 2, name: "side dish" },
                // { id: 3, name: "dessert" },
                // { id: 4, name: "appetizer" },
                // { id: 4, name: "salad" },
                // { id: 5, name: "bread" },
                // { id: 6, name: "breakfast" },
                // { id: 7, name: "soup" },
                // { id: 8, name: "beverage" },
                // { id: 9, name: "sauce" },
                // { id: 10, name: "marinade" },
                // { id: 11, name: "fingerfood" },
                // { id: 12, name: "snack" },
                // { id: 13, name: "drink" },
                // //Alt+shift+direccional abajo
            ],
            occasions: [],
            levels: [],
            saved: [],            
            featuredRecipes: [
                { id: 1, image: "./images/recipes/sushi.jpg", name: "Sushi", category: "Lunch", total_time: 31, servings: 10, level: "Intermedio", likes: 20, ingredients: "300ml Sushi Rice, 100ml Rice wine, 2 tbs Caster Sugar, 3 tbs Mayonnaise, 1 tbs Rice wine, 1 tbs Soy Sauce1 Cucumber", instructions: "STEP 1 TO MAKE SUSHI ROLLS: Pat out some rice.Lay a nori sheet on the mat, shiny-side down.Dip your hands in the vinegared water, then pat handfuls of rice on top in a 1cm thick layer, leaving the furthest edge from you clear. STEP 2 Spread over some Japanese mayonnaise.Use a spoon to spread out a thin layer of mayonnaise down the middle of the rice. STEP 3 Add the filling.Get your child to top the mayonnaise with a line of their favourite fillings - here we've used tuna and cucumber. STEP 4 Roll it up.Lift the edge of the mat over the rice, applying a little pressure to keep everything in a tight roll. STEP 5 Stick down the sides like a stamp.When you get to the edge without any rice, brush with a little water and continue to roll into a tight roll. STEP 6 Wrap in cling film.Remove the mat and roll tightly in cling film before a grown-up cuts the sushi into thick slices, then unravel the cling film. STEP 7 TO MAKE PRESSED SUSHI: Layer over some smoked salmon.Line a loaf tin with cling film, then place a thin layer of smoked salmon inside on top of the cling film. STEP 8 Cover with rice and press down. Press about 3cm of rice over the fish, fold the cling film over and press down as much as you can, using another tin if you have one. STEP 9 Tip it out like a sandcastle.Turn block of sushi onto a chopping board.Get a grown-up to cut into fingers, then remove the cling film. STEP 10 TO MAKE SUSHI BALLS: Choose your topping.Get a small square of cling film and place a topping, like half a prawn or a small piece of smoked salmon, on it. Use damp hands to roll walnut-sized balls of rice and place on the topping. STEP 11 Make into tight balls. Bring the corners of the cling film together and tighten into balls by twisting it up, then unwrap and serve." },
                { id: 2, image: "./images/recipes/fettuccine-alfredo.jpg", name: "Fettuccine Alfredo", category: "Dinner", total_time: 45, servings: 6, level: "Fácil", likes: 18, ingredients: "1 lb Fettuccine, 1/2 cup Heavy Cream, 1/2 cup Butter, 1/2 cup Parmesan, 2 tbsp Parsley, Black Pepper", instructions: "Cook pasta according to package instructions in a large pot of boiling water and salt. Add heavy cream and butter to a large skillet over medium heat until the cream bubbles and the butter melts. Whisk in parmesan and add seasoning (salt and black pepper). Let the sauce thicken slightly and then add the pasta and toss until coated in sauce. Garnish with parsley, and it's ready." },
                { id: 3, image: "./images/recipes/chicken-enchilada-casserole.jpg", name: "Chicken Enchilada Casserole", category: "Lunch", total_time: 20, servings: 8, level: "Díficil", likes: 18, ingredients: "14 oz jar Enchilada sauce, 3 Cups shredded Monterey Jack cheese, 6 corn tortillas, 2 chicken breasts", instructions: "Cut each chicken breast in about 3 pieces, so that it cooks faster and put it in a small pot.Pour Enchilada sauce over it and cook covered on low to medium heat until chicken is cooked through, about 20 minutes.No water is needed, the chicken will cook in the Enchilada sauce.Make sure you stir occasionally so that it doesn't stick to the bottom.Remove chicken from the pot and shred with two forks.Preheat oven to 375 F degrees.Start layering the casserole.Start with about ¼ cup of the leftover Enchilada sauce over the bottom of a baking dish.I used a longer baking dish, so that I can put 2 corn tortillas across.Place 2 tortillas on the bottom, top with ⅓ of the chicken and ⅓ of the remaining sauce.Sprinkle with ⅓ of the cheese and repeat starting with 2 more tortillas, then chicken, sauce, cheese.Repeat with last layer with the remaining ingredients, tortillas, chicken, sauce and cheese.Bake for 20 to 30 minutes uncovered, until bubbly and cheese has melted and started to brown on top.Serve warm." },
                { id: 4, image: "./images/recipes/big-mac.jpg", name: "Big Mac", category: "Dinner", total_time: 50, servings: 2, level: "Intermedio", likes: 18, ingredients: "400g Minced Beef, 2 tbs Olive Oil, 2 Sesame Seed Burger Buns, Chopped Onion, 1/4 Iceberg Lettuce, 2 sliced Cheese2 large Dill Pickles, 1 cup Mayonnaise, 2 tsp White Wine VinegarPinch Pepper2 tsp Mustard, 1 1/2 tsp Onion Salt1 1/2 tsp Garlic Powder, 1/2 tsp Paprika", instructions: "For the Big Mac sauce, combine all the ingredients in a bowl, season with salt and chill until ready to use.2.To make the patties, season the mince with salt and pepper and form into 4 balls using about 1/3 cup mince each.Place each onto a square of baking paper and flatten to form into four x 15cm circles.Heat oil in a large frypan over high heat.In 2 batches, cook beef patties for 1-2 minutes each side until lightly charred and cooked through.Remove from heat and keep warm.Repeat with remaining two patties.3.Carefully slice each burger bun into three acrossways, then lightly toast.4.To assemble the burgers, spread a little Big Mac sauce over the bottom base.Top with some chopped onion, shredded lettuce, slice of cheese, beef patty and some pickle slices.Top with the middle bun layer, and spread with more Big Mac sauce, onion, lettuce, pickles, beef patty and then finish with more sauce.Top with burger lid to serve.5.After waiting half an hour for your food to settle, go for a jog." },
                { id: 5, image: "./images/recipes/banana-pancakes.jpg", name: "Banana Pancakes", category: "Breakfast", total_time: 60, servings: 4, level: "Díficil", likes: 18, ingredients: "1 large Banana, 2 medium Eggspinch Baking Powder, spinkling Vanilla Extract1 tsp Oil, 25g Pecan Nuts, 125g Raspberries", instructions: "In a bowl, mash the banana with a fork until it resembles a thick purée.Stir in the eggs, baking powder and vanilla.Heat a large non-stick frying pan or pancake pan over a medium heat and brush with half the oil.Using half the batter, spoon two pancakes into the pan, cook for 1-2 mins each side, then tip onto a plate.Repeat the process with the remaining oil and batter.Top the pancakes with the pecans and raspberries." },
                { id: 6, image: "./images/recipes/chocolate-souffle.jpg", name: "Chocolate Souffle", category: "Dessert", total_time: 20, servings: 6, level: "Fácil", likes: 18, ingredients: "142ml Single Cream, 25g Caster Sugar, 100g Dark Chocolate, 25g Butterdrizzle Butter, 50g Caster Sugar, 175g Dark Chocolate, 2 tbs Double Cream, 4 Egg Yolks, 5 Egg White, 2 tbs Double Cream to serve Icing Sugar", instructions: "Heat oven to 220C/fan 200C/gas 7 and place a baking tray on the top shelf.For the sauce, heat the cream and sugar until boiling.Remove from the heat, stir in the chocolate and butter until melted, then keep warm.Brush 6 x 150ml ramekins with melted butter, sprinkle with the 2 tbsp caster sugar, then tip out any excess.Melt the chocolate and cream in a bowl over a pan of simmering water, cool, then mix in the egg yolks.Whisk the egg whites until they hold their shape, then add the sugar, 1 tbsp at a time, whisking back to the same consistency.Mix a spoonful into the chocolate, then gently fold in the rest.Working quickly, fill the ramekins, wipe the rims clean and run your thumb around the edges.Turn oven down to 200C/fan 180C/gas 6, place the ramekins onto the baking tray, then bake for 8-10 mins until risen with a slight wobble.Don't open the oven door too early as this may make them collapse.Once the soufflés are ready, dust with icing sugar, scoop a small hole from their tops, then pour in some of the hot chocolate sauce.Replace the lids and serve straight away." },
                { id: 7, image: "./images/recipes/pina-colada.jpg", name: "Pina Colada", category: "Drinks", total_time: 35, servings: 10, level: "Intermedio", likes: 18, ingredients: "3 tblsp Coconut milk, 3 tblsp Pineapple", instructions: "Mix with crushed ice in blender until smooth.Pour into chilled glass, garnish and serve. GlassServe: Collins glass" },
                { id: 8, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 9, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" },
                { id: 10, image: "./images/recipes/strawberry-lemonade.jpg", name: "Strawberry Lemonade", category: "Drinks", total_time: 25, servings: 4, level: "Fácil", likes: 18, ingredients: "Juice of 1 Lemon, 1 tblsp Sugar, 8-10 ripe Strawberries, 1 cup Water", instructions: "Throw everything into a blender and mix until fairly smooth. Serve over ice. Glass Serve: Collins Glass" }
            ],
            relatedRecipes: [],
            allRecipes: [],
            

            ///////////Objects//////////
            user: {},
            recipe: {}
        }
    },
    mounted: function () {

        ////////Carga de API Todas/////
        axios({
            method: 'get',
            url: 'http://prueba01.test/api/recipes/all'
        })
            .then(
                (response) => {
                    // console.log(response.data);

                    let items = response.data;
                    //console.log(items);

                    this.recipes = [];

                    items.forEach(element => {

                        this.recipes.push(
                            {
                                id: element.id,
                                name: element.name,
                                image: 'http://prueba01.test/storage/imgs/' + element.image,
                                total_time: element.total_time,
                                portions: element.portions,
                                level: element.level,
                            }
                        )
                    });

                    this.allRecipes = this.recipes;
                    // this.fetchRecipeDetails();
                }                
            )
            .catch(
                error => console.log(error)
        );

        ////////Carga de API DESTACADAS/////
        axios({
            method: 'get',
            url: 'http://prueba01.test/api/recipes/top10'
        })
            .then(
                (response) => {
                    // console.log(response.data);

                    let items = response.data;
                    //console.log(items);

                    this.featuredRecipes = [];

                    items.forEach(element => {

                        this.featuredRecipes.push(
                            {
                                id: element.id,
                                name: element.name,
                                image: 'http://prueba01.test/storage/imgs/' + element.image,
                                total_time: element.total_time,
                                portions: element.portions,
                                level: element.level,
                            }
                        )
                    });
                    // console.log(this.featuredRecipes);
                }
            )
            .catch(
                error => console.log(error)
            );
        
        
        ////////Carga de API Categories/////
        axios({
            method: 'get',
            url: 'http://prueba01.test/api/recipes/categories'
        })
            .then(
                (response) => {

                    let items = response.data;
                    // console.log(items);

                    this.categories = [];

                    items.forEach(element => {
                        this.categories.push(
                            {
                                id: element.id,
                                label: 'category',
                                name: element.category
                            }
                        )
                    });
                    // console.log(this.categories);
                }
            )
            .catch(
                error => console.log(error)
        );
        
        ////////Carga de API Occasions/////
        axios({
            method: 'get',
            url: 'http://prueba01.test/api/recipes/occasions'
        })
            .then(
                (response) => {

                    let items = response.data;
                    // console.log(items);

                    this.occasions = [];

                    items.forEach(element => {
                        this.occasions.push(
                            {
                                id: element.id, 
                                label: 'occasion',
                                name: element.occasion
                            }
                        )
                    });
                    // console.log(this.occasions);
                }
            )
            .catch(
                error => console.log(error)
        );
        
        ////////Carga de API Levels/////
        axios({
            method: 'get',
            url: 'http://prueba01.test/api/recipes/levels'
        })
            .then(
                (response) => {
                    // console.log(response.data);

                    let items = response.data;
                    // console.log(items);

                    this.levels = [];

                    items.forEach(element => {
                        this.levels.push(
                            {
                                id: element.id,
                                label: 'level',
                                name: element.level
                            }
                        )
                    });
                    // console.log(this.levels);
                }
            )
            .catch(
                error => console.log(error)
        );
        
        
    },
    methods: {        
        fetchRecipeDetails() {
            // for (let index = 0; index < this.recipes.length; index++){
            //     //console.log(this.recipes[index].id);

            //     axios({
            //         method: 'get',
            //         url: 'https://api.spoonacular.com/recipes/' + this.recipes[index].id + '/information?includeNutrition=false&apiKey=a48c522aaf304b2386ce1d225f99b014'
            //     })
            //     .then(
            //         (response) => {
            //             //console.log(response.data.readyInMinutes);

            //             this.recipes[index].total_time = response.data.readyInMinutes;
            //             this.recipes[index].servings = response.data.servings;
            //             this.recipes[index].likes = response.data.aggregateLikes;

            //             //console.log(this.recipes[index]);
            //         }
            //     )

            // }
        },
        onClickRecipeDetails(index) {            
            this.message = '';
            this.alert = false;
           // Carga de los detalles de la receta con el API
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/recipe/' + index
            })
                .then(
                    (response) => {
                        // console.log(response);
                        let item = response.data[0][0];

                        this.recipe.id = index;
                        this.recipe.image = 'http://prueba01.test/storage/imgs/' + item.image;
                        this.recipe.name = item.name;
                        this.recipe.description = item.description;
                        this.recipe.likes = item.likes;
                        this.recipe.category = item.category;
                        this.recipe.occasion = item.occasion;
                        this.recipe.level = item.level;
                        this.recipe.total_time = item.total_time;
                        this.recipe.portions = item.portions;
                        this.recipe.instructions = item.preparation_instructions.split("Step");

                        //Cargar los ingredientes de la receta
                        let ingredientsList = [];

                        let ingredients = response.data[1];
                        // console.log(ingredients);

                        ingredients.forEach(element => {
                            ingredientsList.push(
                                { ingredient: element.description }
                            )
                        });

                        this.recipe.ingredients = ingredientsList;

                        //Cargar las instrucciones

                        let instructionsList = [];
                        
                        let instructions = item.preparation_instructions.split("Step");

                        for (let index = 1; index < instructions.length; index++) {
                            instructionsList.push(
                                { instruction: instructions[index]}
                            )                            
                        }

                        this.recipe.instructions = instructionsList;


                        //Cargar las recetas relacionadas
                        this.relatedRecipes = [];

                        let relatedItems = response.data[2];  
                        console.log(response.data[2]);

                            relatedItems.forEach(element => {

                                this.relatedRecipes.push(
                                    {
                                        id: element.id,
                                        name: element.name,
                                        image: 'http://prueba01.test/storage/imgs/' + element.image,
                                        total_time: element.total_time,
                                        portions: element.portions,
                                        level: element.level,
                                    }
                                )
                            });     
                    }
                )
                .catch(
                    error => console.log(error)
                );

            this.changeView(1);
           
        },
        onClickSaveRecipe(id) {
            this.message = '';
            this.alert = false;

            // console.log(this.isObjEmpty(this.user));

            // verificamos si el usuario esta loggeado
            if (!this.isObjEmpty(this.user)) {
                console.log('Userid  ', this.user.id);
                axios({
                    method: 'get',
                    url: 'http://prueba01.test/api/users/saverecipe/' + this.user.id + '/' + id
                })
                    .then(
                        (response) => {
                            // console.log(response.data);
                            this.message = response.data.message;
                            this.alert = true;
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            } else {
                this.message = 'You must Log In first';
                this.alert = true;
            }
           
        },
        onClickLikeRecipe(id) {
            // axios({
                
            //     method: 'get',
            //     url: 'http://prueba01.test/api/users/getuserid'
            // })
            //     .then(
            //         (response) => {
            //             console.log(response.data);

            //             if (this.token != undefined) {
            //                 console.log("user is logged in")
            //             }
            //         }
            //     )
            //     .catch(
            //         error => console.log(error)
            // );
            
            // console.log(this.isObjEmpty(this.user));
            if (!this.isObjEmpty(this.user)) {

                console.log('Userid  ', this.user.id);
                axios({
                    method: 'get',
                    url: 'http://prueba01.test/api/users/likes/'+this.user.id+'/' + id
                })
                    .then(
                        (response) => {
                            console.log(response.data);
                            if (response.data.message == 200) {
                                this.message = response.data.message;
                                this.alert = true;
                                // this.recipe.likes++;
                                
                            } else {
                                this.message = response.data.message;
                                this.alert = true;
                            }
                            
                        }
                    )
                    .catch(
                        error => console.log(error)
                    );
            } else {
                this.message = 'You must Log In first';
                this.alert = true;
            }

            
        },
        onClickGoHome() {
            this.recipes = this.allRecipes;
            this.changeView(0);
        },
        onClickGoProfile() {                       
            
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/users/savedrecipes/' + this.user.id 
            })
                .then(
                    (response) => {
                        console.log(response.data);                        

                        let items = response.data;

                        this.saved = [];

                        items.forEach(element => {

                            this.saved.push(
                                {
                                    id: element.id,
                                    name: element.name,
                                    image: 'http://prueba01.test/storage/imgs/' + element.image,
                                    total_time: element.total_time,
                                    portions: element.portions,
                                    level: element.level,
                                }
                            )
                        });
                    }
                )
                .catch(
                    error => console.log(error)               
            );

            this.changeView(5);
            
        },
        onClickGoForgotPassword() {
            this.message = '';
            this.alert = false;
            this.changeView(4);
        },
        onClickGoLogin() {
            this.message = '';
            this.alert = false;
            this.changeView(2);
        },
        onClickGoRegister() {
            this.message = '';
            this.alert = false;
            this.changeView(3);
        },
        doSearch() {
            
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/searchbyname/'+ this.search
            })
                .then(
                    (response) => {
                        //console.log(response);

                        let items = response.data;
                        //console.log(items);

                        this.recipes = [];

                        items.forEach(element => {

                            this.recipes.push(
                                {
                                    id: element.id,
                                    name: element.name,
                                    image: 'http://prueba01.test/storage/imgs/' + element.image,
                                    total_time: element.total_time,
                                    portions: element.portions,
                                    level: element.level,
                                }
                            )

                        });

                        // if (this.recipes.length <= 0) {
                        //     this.message = "No se encontraron resultados";
                        //     this.alert = true;
                        // } else {
                        //     this.message = "Se encontraron coincidencias";
                        //     this.alert = true;
                        // }

                        // this.fetchRecipeDetails();
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        onClickCloseAlert() {
            this.message = "";
            this.alert = false;
        },
        onClickSearchFilter(id, label) {
            axios({
                method: 'get',
                url: 'http://prueba01.test/api/recipes/filterby/'+ label +'/'+ id
            })
                .then(
                    (response) => {
                        // console.log(response);

                        let items = response.data;
                        // //console.log(items);

                        this.recipes = [];

                        items.forEach(element => {
                            this.recipes.push(
                                {
                                    id: element.id,
                                    name: element.name,
                                    image: 'http://prueba01.test/storage/imgs/' + element.image,
                                    total_time: element.total_time,
                                    portions: element.portions,
                                    level: element.level,
                                }
                            )
                        });
                    }
                )
                .catch(
                    error => console.log(error)
                );
        },
        doRegister() {
            // console.log(this.name);
            // console.log(this.last_name);
            // console.log(this.username);
            // console.log(this.email);
            // console.log(this.password);

            let postData = {
                name: this.name,
                last_name: this.last_name,
                country: 'Costa Rica',
                email: this.email,
                password: this.password
            };

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            };

            axios.post('http://prueba01.test/api/users/register', postData, config)
                .then(
                    (response) => {
                        console.log(response.data);

                        this.token = response.data.access_token;
                        console.log(this.token);

                        if (this.token == undefined) {                            
                            this.message = "Failed to Sign Up";
                            this.alert = true;
                        } else {
                            this.user = response.data.data;

                            console.log(this.user);

                            this.guest = false;
                            this.onClickGoProfile();
                        }
                    }
                )
                .catch(
                    error => error => {
                        console.log(error)
                        this.message = error.response.data.message;
                        this.alert = true;
                    } 
                );

            // axios({
            //     method: 'post',
            //     url: 'http://prueba01.test/api/users/register?name='+this.name+'&last_name='+this.last_name+'&country=Costa Rica&email='+this.email+'&password='+this.password
            // })
            //     .then(
            //         (response) => {
            //             console.log(response);

            //             this.token = response.data.access_token;
            //             console.log(this.token);

            //             if (this.token == undefined) {
            //                 this.message = "Failed to Sign Up";
            //                 this.alert = true;
            //             } else {
            //                 this.onClickGoProfile();
            //             }

            //         }
            //     )
            //     .catch(
            //         error => console.log(error)
            //     );
        },
        doLogin() {
            // console.log(this.email);
            // console.log(this.password);   

            let data = {
                email: this.email,
                password: this.password
            }

            let config = {
                headers: {
                    'Content-Type': 'application/json',
                    "Access-Control-Allow-Origin": "*"
                }
            }

            axios.post('http://prueba01.test/api/users/login', data, config )
                .then(
                    (response) => {
                        console.log(response);
                        this.token = response.data.accessToken;

                        if (this.token == undefined) {
                            this.message = "Failed to Log In";
                            this.alert = true;
                        } else {
                        
                            this.user = response.data.user;

                            console.log(this.user);

                            this.guest = false;
                            console.log(this.token);
                            this.onClickGoProfile();
                        }
                        
                    }
                )
                .catch(
                    error => {
                        console.log(error)
                        this.message = error.response.data.message;
                        this.alert = true;                                                       
                    } 
                );
            
        },
        onClickLogOut() {
            
            // axios({
            //     method: 'get',
            //     url: 'http://prueba01.test/api/users/logout'
            // })
            //     .then(
            //         (response) => {
            //             console.log(response.data);                        
            //         }
            //     )
            //     .catch(
            //         error => console.log(error)
            // );
            console.log(this.token);

            axios.get('http://prueba01.test/api/users/logout', {                
                headers: {
                    'Authorization': `Bearer ${this.token}`                    
                }
            })
                .then((res) => {
                    console.log(res.data);
                    this.user = {};
                    this.onClickGoHome();
                    this.guest = true;  
                    // console.log(this.user);
                })
                .catch((error) => {
                    console.error(error)
                })            
           
        },
        recoverPassword() {
            console.log(this.email);

            if (this.email == null) {
                this.message = "Email invalid";
                this.alert = true;
            } else {
                axios({
                    method: 'post',
                    url: 'http://prueba01.test/api/users/recoverPassword?email='+this.email
                })
                    .then(
                        (response) => {
                            console.log(response.data);

                            if (response.data.code == 200) {
                                this.message = "New Password: "+ response.data.password;
                                this.alert = true;
                            } else {
                                this.message = response.data.message;
                                this.alert = true;
                            }

                        }
                    )
                    .catch(
                        error => {
                            console.log(error)
                            this.message = error.response.data.message;
                            this.alert = true;
                        } 
                    );
            }

        },
        isObjEmpty(obj) {
            return Object.keys(obj).length === 0;
        },
        changeView(view) {
            switch (view) {
                //Home
                case 0:
                    this.home = true;
                    this.details = false;
                    this.profile = false;
                    this.forms = false;
                    break;
                //Details
                case 1:
                    this.home = false;
                    this.details = true;
                    this.profile = false;
                    this.forms = false;
                    break;
                //Log In
                case 2:
                    this.home = false;
                    this.details = false;
                    this.profile = false;
                    this.forms = true;
                    this.forgotPassword = false;
                    this.register = false;
                    this.login = true;
                    break;
                //Sign Up
                case 3:
                    this.home = false;
                    this.details = false;
                    this.profile = false;
                    this.forms = true;
                    this.forgotPassword = false;
                    this.register = true;
                    this.login = false;
                    break;
                //Recover Password
                case 4:
                    this.home = false;
                    this.details = false;
                    this.profile = false;
                    this.forms = true;
                    this.forgotPassword = true;
                    this.register = false;
                    this.login = false;
                    break;
                //Profile
                case 5:
                    this.home = false;
                    this.details = false;
                    this.profile = true;
                    this.forms = false;
                    break;

            }
        }
    }
})