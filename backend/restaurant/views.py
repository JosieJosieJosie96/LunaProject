from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers import RestaurantCreateSerializer


class RestaurantGetView(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCreateSerializer
    permission_classes = (IsAuthenticated,)

    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)


class RestaurantCreateView(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantCreateSerializer
    permission_classes = (IsAuthenticated,)

    def post(self, request, *args, **kwargs):
        user_data = request.data
        serializer = self.get_serializer(data=user_data)
        serializer.is_valid(raise_exception=True)
        serializer.save(user=request.user)
        return Response(serializer.data)
