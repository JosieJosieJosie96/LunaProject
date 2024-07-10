from rest_framework.generics import GenericAPIView
from rest_framework.permissions import IsAuthenticated
from rest_framework.response import Response

from restaurant.models import Restaurant
from restaurant.serializers import RestaurantCreateSerializer, RestaurantGetSerializer


class RestaurantGetView(GenericAPIView):
    queryset = Restaurant.objects.all()
    serializer_class = RestaurantGetSerializer
    permission_classes = []

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

class RestaurantCategoryView(GenericAPIView):
    serializer_class = RestaurantGetSerializer
    permission_classes = []

    def get_queryset(self):
        queryset = Restaurant.objects.all()
        filter_option = self.kwargs.get('category')
        if filter_option is not None:
            return queryset.filter(category=filter_option)
        return queryset


    def get(self, request, *args, **kwargs):
        queryset = self.get_queryset()
        serializer = self.get_serializer(queryset, many=True)
        return Response(serializer.data)

class RestaurantUserView(GenericAPIView):
    pass
