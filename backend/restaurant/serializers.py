from rest_framework import serializers


from restaurant.models import Restaurant


class RestaurantCreateSerializer(serializers.ModelSerializer):
    class Meta:
        model = Restaurant
        fields = '__all__'
        read_only_fields = ['user']


class RestaurantGetSerializer(serializers.ModelSerializer):
    # user = UserSerializer()
    class Meta:
        model = Restaurant
        fields = ['id', 'name', 'address', 'city', 'state', 'zipcode', 'user']
