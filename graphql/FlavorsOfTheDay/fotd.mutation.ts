import { GraphQLObjectType } from 'graphql';
import { GraphQLString, GraphQLInt } from 'graphql/type';

export const FlavorMutation: GraphQLObjectType = new GraphQLObjectType({
    name: 'FlavorMutation',
    description: 'Flavor Mutations',
    fields: () => ({
        addFlavor: {
            type: FlavorMutation,
            description: 'Add a flavor',
            args: {
                name: {
                    type: GraphQLString,
                    description: 'The name of the flavor'
                },
                description: {
                    type: GraphQLString,
                    description: 'The description of the flavor'
                },
                restaurantId: {
                    type: GraphQLInt,
                    description: 'The id of the restaurant'
                }
            },
            resolve: (source, args) => {
                const flavor = {
                    id: 1,
                    name: args.name,
                    description: args.description,
                    restaurantId: args.restaurantId
                };
              
                return flavor;
            }
        },
    })
});