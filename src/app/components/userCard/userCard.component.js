import userCardController from './userCard.controller';

let userCard = () => {
   return {
      restrict: 'E',
      template: require('./userCard.component.html'),
      scope: {
         name: '@',
         theme: '@'
      },
      controller: userCardController
   }
};

export default userCard;
