PGDMP                  
    |           UxSearch    16.1    17.0 !               0    0    ENCODING    ENCODING        SET client_encoding = 'UTF8';
                           false                       0    0 
   STDSTRINGS 
   STDSTRINGS     (   SET standard_conforming_strings = 'on';
                           false                       0    0 
   SEARCHPATH 
   SEARCHPATH     8   SELECT pg_catalog.set_config('search_path', '', false);
                           false                       1262    49152    UxSearch    DATABASE     }   CREATE DATABASE "UxSearch" WITH TEMPLATE = template0 ENCODING = 'UTF8' LOCALE_PROVIDER = libc LOCALE = 'Spanish_Chile.1252';
    DROP DATABASE "UxSearch";
                     postgres    false            �            1259    49212    administrador_id_admin_seq    SEQUENCE     �   CREATE SEQUENCE public.administrador_id_admin_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.administrador_id_admin_seq;
       public               postgres    false            �            1259    49153    administrador    TABLE     �   CREATE TABLE public.administrador (
    id_admin integer DEFAULT nextval('public.administrador_id_admin_seq'::regclass) NOT NULL,
    correo_electronico character varying(255) NOT NULL,
    "contraseña" character varying(255) NOT NULL
);
 !   DROP TABLE public.administrador;
       public         heap r       postgres    false    222            �            1259    49216    auditoria_id_auditoria_seq    SEQUENCE     �   CREATE SEQUENCE public.auditoria_id_auditoria_seq
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 1   DROP SEQUENCE public.auditoria_id_auditoria_seq;
       public               postgres    false            �            1259    49170 	   auditoria    TABLE     �   CREATE TABLE public.auditoria (
    id_auditoria integer DEFAULT nextval('public.auditoria_id_auditoria_seq'::regclass) NOT NULL,
    id_metodo integer,
    id_admin integer,
    fecha_auditoria date,
    tipo_movimiento character varying(255)
);
    DROP TABLE public.auditoria;
       public         heap r       postgres    false    223            �            1259    49202 
   categorias    TABLE     r   CREATE TABLE public.categorias (
    id_categoria integer NOT NULL,
    nombre character varying(255) NOT NULL
);
    DROP TABLE public.categorias;
       public         heap r       postgres    false            �            1259    49165    filtros    TABLE     }   CREATE TABLE public.filtros (
    id_filtro integer NOT NULL,
    nombre character varying(255),
    id_categoria integer
);
    DROP TABLE public.filtros;
       public         heap r       postgres    false            �            1259    49185    filtros_metodos    TABLE     h   CREATE TABLE public.filtros_metodos (
    id_metodo integer NOT NULL,
    id_filtro integer NOT NULL
);
 #   DROP TABLE public.filtros_metodos;
       public         heap r       postgres    false            �            1259    49200    métodos_id_metodo_seq    SEQUENCE     �   CREATE SEQUENCE public."métodos_id_metodo_seq"
    START WITH 1
    INCREMENT BY 1
    NO MINVALUE
    NO MAXVALUE
    CACHE 1;
 /   DROP SEQUENCE public."métodos_id_metodo_seq";
       public               postgres    false            �            1259    49158    métodos    TABLE       CREATE TABLE public."métodos" (
    id_metodo integer DEFAULT nextval('public."métodos_id_metodo_seq"'::regclass) NOT NULL,
    nombre_metodo character varying(255),
    resumen_metodo text,
    ventajas_metodo text,
    desventajas_metodo text,
    referencia_metodo text
);
    DROP TABLE public."métodos";
       public         heap r       postgres    false    220            	          0    49153    administrador 
   TABLE DATA           T   COPY public.administrador (id_admin, correo_electronico, "contraseña") FROM stdin;
    public               postgres    false    215   �'                 0    49170 	   auditoria 
   TABLE DATA           h   COPY public.auditoria (id_auditoria, id_metodo, id_admin, fecha_auditoria, tipo_movimiento) FROM stdin;
    public               postgres    false    218   R(                 0    49202 
   categorias 
   TABLE DATA           :   COPY public.categorias (id_categoria, nombre) FROM stdin;
    public               postgres    false    221   R)                 0    49165    filtros 
   TABLE DATA           B   COPY public.filtros (id_filtro, nombre, id_categoria) FROM stdin;
    public               postgres    false    217   -*                 0    49185    filtros_metodos 
   TABLE DATA           ?   COPY public.filtros_metodos (id_metodo, id_filtro) FROM stdin;
    public               postgres    false    219   �+       
          0    49158    métodos 
   TABLE DATA           �   COPY public."métodos" (id_metodo, nombre_metodo, resumen_metodo, ventajas_metodo, desventajas_metodo, referencia_metodo) FROM stdin;
    public               postgres    false    216   �-                  0    0    administrador_id_admin_seq    SEQUENCE SET     H   SELECT pg_catalog.setval('public.administrador_id_admin_seq', 2, true);
          public               postgres    false    222                       0    0    auditoria_id_auditoria_seq    SEQUENCE SET     I   SELECT pg_catalog.setval('public.auditoria_id_auditoria_seq', 77, true);
          public               postgres    false    223                       0    0    métodos_id_metodo_seq    SEQUENCE SET     G   SELECT pg_catalog.setval('public."métodos_id_metodo_seq"', 47, true);
          public               postgres    false    220            j           2606    49157     administrador administrador_pkey 
   CONSTRAINT     d   ALTER TABLE ONLY public.administrador
    ADD CONSTRAINT administrador_pkey PRIMARY KEY (id_admin);
 J   ALTER TABLE ONLY public.administrador DROP CONSTRAINT administrador_pkey;
       public                 postgres    false    215            p           2606    49174    auditoria auditoria_pkey 
   CONSTRAINT     `   ALTER TABLE ONLY public.auditoria
    ADD CONSTRAINT auditoria_pkey PRIMARY KEY (id_auditoria);
 B   ALTER TABLE ONLY public.auditoria DROP CONSTRAINT auditoria_pkey;
       public                 postgres    false    218            t           2606    49206    categorias categorias_pkey 
   CONSTRAINT     b   ALTER TABLE ONLY public.categorias
    ADD CONSTRAINT categorias_pkey PRIMARY KEY (id_categoria);
 D   ALTER TABLE ONLY public.categorias DROP CONSTRAINT categorias_pkey;
       public                 postgres    false    221            r           2606    49189 $   filtros_metodos filtros_metodos_pkey 
   CONSTRAINT     t   ALTER TABLE ONLY public.filtros_metodos
    ADD CONSTRAINT filtros_metodos_pkey PRIMARY KEY (id_metodo, id_filtro);
 N   ALTER TABLE ONLY public.filtros_metodos DROP CONSTRAINT filtros_metodos_pkey;
       public                 postgres    false    219    219            n           2606    49169    filtros filtros_pkey 
   CONSTRAINT     Y   ALTER TABLE ONLY public.filtros
    ADD CONSTRAINT filtros_pkey PRIMARY KEY (id_filtro);
 >   ALTER TABLE ONLY public.filtros DROP CONSTRAINT filtros_pkey;
       public                 postgres    false    217            l           2606    49164    métodos métodos_pkey 
   CONSTRAINT     _   ALTER TABLE ONLY public."métodos"
    ADD CONSTRAINT "métodos_pkey" PRIMARY KEY (id_metodo);
 D   ALTER TABLE ONLY public."métodos" DROP CONSTRAINT "métodos_pkey";
       public                 postgres    false    216            v           2606    49180 !   auditoria auditoria_id_admin_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.auditoria
    ADD CONSTRAINT auditoria_id_admin_fkey FOREIGN KEY (id_admin) REFERENCES public.administrador(id_admin);
 K   ALTER TABLE ONLY public.auditoria DROP CONSTRAINT auditoria_id_admin_fkey;
       public               postgres    false    4714    218    215            w           2606    49218 "   auditoria auditoria_id_metodo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.auditoria
    ADD CONSTRAINT auditoria_id_metodo_fkey FOREIGN KEY (id_metodo) REFERENCES public."métodos"(id_metodo) ON DELETE CASCADE;
 L   ALTER TABLE ONLY public.auditoria DROP CONSTRAINT auditoria_id_metodo_fkey;
       public               postgres    false    216    4716    218            x           2606    49195 .   filtros_metodos filtros_metodos_id_filtro_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.filtros_metodos
    ADD CONSTRAINT filtros_metodos_id_filtro_fkey FOREIGN KEY (id_filtro) REFERENCES public.filtros(id_filtro);
 X   ALTER TABLE ONLY public.filtros_metodos DROP CONSTRAINT filtros_metodos_id_filtro_fkey;
       public               postgres    false    219    217    4718            y           2606    49190 .   filtros_metodos filtros_metodos_id_metodo_fkey    FK CONSTRAINT     �   ALTER TABLE ONLY public.filtros_metodos
    ADD CONSTRAINT filtros_metodos_id_metodo_fkey FOREIGN KEY (id_metodo) REFERENCES public."métodos"(id_metodo);
 X   ALTER TABLE ONLY public.filtros_metodos DROP CONSTRAINT filtros_metodos_id_metodo_fkey;
       public               postgres    false    216    219    4716            u           2606    49207    filtros fk_categoria    FK CONSTRAINT     �   ALTER TABLE ONLY public.filtros
    ADD CONSTRAINT fk_categoria FOREIGN KEY (id_categoria) REFERENCES public.categorias(id_categoria);
 >   ALTER TABLE ONLY public.filtros DROP CONSTRAINT fk_categoria;
       public               postgres    false    4724    217    221            	   H   x�3�,(*MMJL�/*J�wH�M���K���LL���K��+)J�2��J+rSK2�S��S��3R�p(����� ί          �   x���1N1Ek�.��؎3%ZM1LA�4�p���b�*�h�K�ދ�<}���89f:�t�����������y=�T!���<
y�Q��@��'dO@O OP�j��J����d�${�q�o�/%M׏������ɾZ�-eN�شjڟ] żZ"`�i���9�Ц9�m�sJ�F9��O�Rt�Eg��.����Ct�t����ὑ�&�7�#dF
�= {���tc8�         �   x��O;ND1��S�,X>�J[����$F���#;�wڊ#����$v

[�x4���b��e�*���J���Jb�H����&�M5l���}xe:5?ekR��<���	�b���Ql��7����Θ#Y���?8�_�S��l�A�e�Ļ���Է#{��0�.g�b�����p�Wi5��i
��Q��\<:����w�� ��In�         f  x�mRKN�0\?�� j��.K[!$�*�ؘĭ��<���Nы�M;�����8��چ�ZL��a�`,��&���~��5�s��A{�hn��TMZ�"z�n�u��: HV�2:E;	��#����6�>�*2�r۪w�g|�5���Sy��nucT��3���(�=���S���	��^S*ʔ3!�Nw�6�%<��W�ʬ=Ld�z���S{/V�`jcSJ%ŏ)Ϸ.Z���^ӖiT��*A!��bb
��9)���o�HN`ކ�,`AOh�
�aʤL ]p@�����.�3&���T��J@	���S61a��yp�9��<�Vܢ�-��	���ݟ����t�����         �  x�-����0�R0�� �\��4�麥�GX�
��|��=e�?P�Dܫ�WŹ��7n>a��|����0)��c����ڤ6�-�Y���m��-
���#���h��b��1L���r�ǽ��p�۵۵۵�6��ﴩ.HFdDF�"#2�L��]�=mSޔ7��-��)oj�ڦ��=�=�=~l��C����(U��Ü��C�����AmL�)ȉ8���<,�Ř11|_��K���D.�K��%�D~&1q"��_��{s~����Hcel��C�*8�X�(�����ս�p�+\�
�������4�X�6�8���H�h�����+\���
W���p=^y��x������6��&�=Y1Y1Y1Y1Y1Y1S1oq��X����s\��/z�E�Q�2ڸ�$�!0�t y�b�")�"#�}���}�����7b$[!��>H�A��}�l�d����?���]      
      x��}K��V��:�+0P�T��إ���*�%XRW�t57�7"�f�F�Rh��,g�@j����6��ɜ�}���
�荝���q�9�;�'g{����ͼ�~���m�lm�rn�~0����_e���:[m?u�pYa��n�v�?��}k�ʪ,L����oW�
/ÿẵ�?���e˦_�����5pc�ެ�hඝm�߳7M�MV�������:[���)�út�`������µ���	�\<�6�.�o�p8ֵmV%|.[w�~��3�UeWf�����lif�]��t޵�0����^I�l�[��{G���{��5͢�\kp0��i��x�
��H�?q�mxsj�[_چ���ә����g�k�O]�*��!���G��<�k}��+�"�,|Z��6&k���O3x&w#�����T ;�Z7����T�Q�;_܎��#
bg붼���>����D���-�����l�-\A2�
�BSgfa�\Ӗ˚.��Q��-�}KTZg�F�[姮"��ާ��jY\���좢M��q������!��<�UqW|�3�UX^wm���8�OD��ܚ��0�5�ՖǡJ��i\Uɿ�=l�m?�d����8xԭ��yc
�i��X)�3:����%�4>�
4�_��*]�ʐ�kq��ҠA�w"�}e�}	�wfuUn?�U��xB[��D[�g��j:��U	[����֢����
r�[���uA�q�j�J/�vj�]�>�W�`����m_��E++˱ƅ�l2Su.�^0خ�XM�U,�,e]�U�n� �}U�+�j?�`���}��7=X���M51� �8䬪�;.�l�W<� W���x��y� �Ec�P�9H�L$��+lO�w�H��aQ��Ud�u��'(�K�km�tf�Pb[�X�����1��7�4�aɗ��3��!Y.��W0�,�ȍ�M<HC�����%=�b�����6�u�-�3�-�Qa����e�3�̍���+k�WP�gu ��x4p'kT|��(l�E�۾��	�f�6�AP`���~�J��P�ć8@%6�+ud�Ruȋ�F�<cc���z|tQƊ��Y7r=8WCsE�����#�On4����d`�m��F�ŵ��� �Cn�Y������,:��<�c��g����$#&�y�ci+�d�������� �F'{zݸ~yM�[��ʎw0��}X��U��y������O�g�K|pc7����,{����l���G���	�b�γ�G''��X$���?�2~ԺX��T ��,.��iv�u��{�.�[[v9��õA���9��?����nU��NN��\���8������e����d��3�5Y��4�	� ����;X��~l��\~W.�.T�.��e
�nmse*���% C���]�[��d�Q̓Vࢃc��f"�n\ѓf����\|v��^F�͚l���sG�n72Q4Vd��	������d��/-N��\��� �d�����^�f�Of5�jDO�����J�W��ZX��f���L����2hEo���*�������CHf2���
�
��Ӕ=Q{UO�핽q�y� i��^E�5���Ĺ`'�q!q�k4��;$�"B�Ab�yzÚ+�5"|�> �1w�Tc�}��oDvp��#b��S�Z����4O�. \G�+�j3)H�B�j_*��v\�G��f��3S���i$�w��Ӡ����o#���ҋ��{_(	����`��Ϸ�W�0`�X�c�fT��E~ta[�#���b�p�E���q!��C_�����hl"Q��L��P�w��0��d)N� 2��UE��<��xK��*X����Չ�8�@l�Dx�cb}e�8�<����X�|84i\�I/��X�0�^�8x�	�^�}�b=��L��i���f��({���*p���[q�u�ī���pa�vr���Awm�<�9��6Yn_�ٛ<�G���'�fb,?Y��
�	���� �fЏZՋ����`��	�")f1Ξ�ժ�iy ƀ�����!%� �B��G����]w����z��|�Ex����EX
�����h��~���eώl��`�j�`� [��J���H[��ͮ�}d�`�/3	(3D��H2���bh�Սe5c�����0a�$^�m�l ����e�.�qa?M2{�Ɖ�#Gq�p��R"9���چU��O���&�n����]�A��e�T��8��E�tQ,=�5ܳ�0�����/Į�?�KH�6������m m� �+�j�C��8���.�pR��$
�-�<A�Sۏ���B�e�Mg%Y,3¬jĴ��0 �����+�d�Chz'&�0��7�kEb)�,o��m� ʛEc�`nii�X��cـ[!� ��_S�/���eB�Q�z�S�-~:Y��Mq��	�����˼�!W���{E�z�U�;�3I�M�_s�k��4�F�D�H�8��C�$%���F�.�|vYiMW���N�4ۤ<p�P�h8�2�@�.Q����z	Ol��(�a���c���z�s�q ��$SL٩lik0yp���
P�Yd�q��y`<g+�x̓6��otKT�?޻M�RT��\�
�PQ��I/�v�lf���������	16Zn����d5L�̛�J�R�aHA7�0SS�����IDP�W�4l��@����N�������z9o̲�XGn�o�0%e%��f<{���oP1#eYh~���?�X���\b��c��h+��u�֦��2*Ea���n��!�50?��4������v�[n ��Z�����9��'z��C0�yvtxx��l ��(���O5 ;�/�|���k���ã�7�5[uN�����ɓ����lٔE��#��~���5h/ch�
�VJ��3�d
���`'���{������ ��B}|?/!�T|�e�d!R)~,�&�CA�����1͜KO#XƐ�n�9�V=a��xU9����nH���mJ���� j�Eo�4�J�m]e��U��`��GK&S��O	�{j�q�q�u�+@��9�@�`&J�,�+�
U�&�v-h�������<�e�1#b|Ν.��g�睠��>��D�Ԑ1>��/Y;�ܚ�M�ʺ7h� ·��
�"`#�7Kv����u�S�@�� +O�Ln�F���u�L�Z��' �*þ�:����h=¦;HUL����!��h�$7���D�u���O|Rq�ě�cRƩ!n��de��GKGr�B���`-�	� q���4��T끋���Hm� �a rQA�Rox�Bv����X'S�10vaB����/����u��/=}����
=Rp�t1VҪ}=!B�&�1��"F�%T������VU�C�TG�/�sК�sq�Hp9�
��`f)� ����.�� �T���\+�uŚ������b���Ѳ]4e;Tf��T�јAhB���&�V����U_RW4R��p=�q7�i�tq}���0*7�7�GT�uC��i\��z#�kXSAMK"���Pm�(hu"k"�����&�&�+	9A�>^�� �'�~���V����-[�w~G_��	V���b\$O���uY/+{�D���-�Wc3o����?��AD��[����Q2�U��_3�c�v�(I��>998;<���ѓ�O����^<���<zxxx||prvt��=�Or� �wz�w����\�$L>NQؒz]�z�j3]�R���Q�Z36�
�/�`y*��2}1ӫ�v�%�2�А���lwC��W(Z�ϥ�����*���3���抿]9J�#}���L�/���9���ɼ�~��}�|��Rf���S�P`�ԗ4��	�Q̒�e�bTr��hX&���U 
�h���tYQ�Xp�[Gy+\�ȆҢs���
ԃ����S�=U�'��z�̯g�Xl]
�VD�f32gs�#���q�w>�rH|6�^�S{I;�9    ��d��2Q�S�9D��
"�~���ǨZ�1�J�� &C�&���
�P�}X) ������ܟ�C�Ij�>�ben݁����	�։R;aM�A~��Ҫoɮ�lɸ�Ad�y��]�ٺ���%T�v�V�<�M\��5�]RMA���-�Y!��o����*�+�>%YC�Pq6IXj�q� �)�Hs�����a'�H���x
)�4��L�M��"���\2�I�D���z\!��u��~CX��H�)34��#���i}0�n��SH���s}��Ы��m�S>�&{��{R���:6�O�Wl(aK�,ߵ���l�-D��g�qS�G�쎎(gp�3�$��ق�_�����l�ay�*�׹-�����{�T=���ã㳓�������3
GI�^�;γ�������W��_�7���/��_��~�ũ�ST�|�ɓ'�y~�h>����=�'=�n��f���Ά��i0%-��XrD$�z��P�\ '3��X�����w�Ģ�,l����v��W��4�C uA��p!9��Z�8 Ʀ@RY8TvBFK���K���@/��>P���،q(h%����Ăyb{��fv��3�
V��f*��*���5��,ۏ�5�\� 9*�&6�ă��į)��a�B��.k��PQ�96}5"3%,���_��F���降VН����E�=&�T���I�fY����6É��>�\�ܸXX<-��&�l��m�p�MO���2��!��$�y��6´I�D�#P(
��&�); x93*�PW���o������/���5q4��� �Z:�>��go��I�!T�������������~�鰆1�fn�ư'���8�D�ڲ��T;�PH��g�#2m�8r�]�2�[�ޕ4��*J�d�K�$yr-��)$�MqY`7|�:r�D�������N+�0>2�s�C��&b0S �&�4���ԏ}9
T�6�<��_��DW�DM�~[���A����SƸ(T��dE�UtD	��#��G�R�+�F�e7�\�X��|��<�����@5C�F���/�B엶�v�9�n����n@��?�y�������!��9�H�?�|���w����P_����5����'S?�ѡ����'x�1����TƦ��(h<����\�[B�Z�ː�$��O��)���xc�w4vMQo���옖�c����8���N^�	�w�
�7.T���ĆEk�Lz߰ev��N��w�uS���d=r�S(����i%�c&�����RJR
)�^�|EJd�1�L2ٱz�3�S�����
�\$ ���0|z_��`6��\j����B����ZyC�/;�a	c�X:�d]5��~\V� ����*-%����.4J�)V��x�K�j�WJ������]��j�S҃&���8O�\�Ԑ� ~�h�17��\�Pg J�Nʷ��yT�N�ЇpD6� EI�;L�Č��RW̾�ˀ<�k[_��w��T��F'ىQCq;W����V�{4�W8*����,z��)~m}Ih������sSŵ�0=�+�J�et�~����&���LZK�B��X2@N��y��ع�	��@��j����Ϛ�m�\��U�!n���9���F<��ґ��k��kT��i_Ʌ�W���*A3����"�>��`�*P�i�qHJ�sG�g�B�5�h�kse�~��M'<�����Zv�|��z_�S��d������ãkE�޺��ˁDA�L$Z�~PrL��;����=L����
.��e�ا���6O��u�b�O�*�P�Ywm�Ɓ 0/(���IgT����t����k5O���N�\"�Ԡ��r)&�O2��(g�&4R�Ly�3+�b��� ��_���:����w]λ�gA9�k�l����q�kLjK�ȃ�q������㐈j5�������D4���DX�	���φ+�������)v�� �TH�b�d�D��A'=>!:�f�����1A����B$�k�dQ�F�ć�8ZĢ�G������uw�I��� ~1�e�7d"Rq�c�/{�-��1UA ;����7ړt<��uY�>s�%*6DI��~�}Ճ�h��>�}ڊ噹���Q�w�,��>�̻�!w��$i4]�T�Q�R:��M�ID1��K܍פu���.{�]�� ٣�pz9m�R��e%w\t��Xw�4�'l�����tO�\[m��
T3�t�6rZ\�	�64[�ɭ�+�n�-rF/VȮ��ro�Z��gٷe]�]�`#n��,�wz(LM�/^�i�]�(t������t��2����[Oh�)^1�-�� 2R�\a*���.KNEk(ϐ��`|�|NE�T�\��¿�����F��I:vfQ3� bD�V
Y���A����M"�mHe�po������+�F�q�1��Űa�A�S?DG�x*-��j�kmI+%��I�t�l�Uߠv���[4�]����E��%fy0z�2����g�ێ�R�H�х���TǐZ�eQ���X\9�А�$���l��i[�ܺ�����UD`�;��Kz����ǂtfݑxc(J�����SX�&�zȃ�`�]G�D6sH�S�0f�y�
�T�%��;���SN�q{�-����tŻ?�b��bwr
L�<��ҭ����DS��Sۚ��j�c�(#���~�Xa*�R;%���C�vvN|DH�X@�x���T�2�U�I�B7�Q��0N7;3(놔���24�&"צ�0�`��Ip�]g�M̒/�A��P_u�|�;A�x�[j�4�����Ǎ��Z(�C����g&z���EX�y����b1���g4M�bs���v��?_w�O=�`�w �~.=)U�ivQ+�BB%@C�Kxv
lD���ԗ��)���݅��1@\��ز�-u�Q�� �{�i�|�9�&�ƾ���B�(.GI���٣���� ʎ�}�w��C��JD�a��rђ�
��ƁZ�B���bx�\�[��R��]���x�}Ƒ��0Q�=M��h�NȽ��a.-f�B�4��z�_%��%���\,k_+���#��æd�d?=$Ċ��^	:�*�CG��,�����+�><v1Τi�~���"��3�\8�3e��/�!�~� WVCQ�eԾ��GBr���*̢�AC�#��('0q��"xg�U��F�&�cb�Zj��� �k�V�	=�r����g	'fp�"߻���0�|kW�м�"yWG�dX��vZ���L0�/�� �S����'��ث�33Gr ̸�F�+�n���	��ը�O�Qq���&n2�4�ʥ��_��M�gQ���0�EG*�3��Z-�N0�{���f'���}�J���k������K�Q��x�#��<�������LJ���,p���a琬�gȰ�s�.)��UI�u`�f�l�c�
�ը�} �Ŕ���8��.�桳�1]�8
�D�W�(��I�SI�=[ i�8��<�66(��|�k�w�ftgKOt�`� ��� �:`u�<%���`�K���%�4bP��N�zQx��Zɿ��
��]U*��0�ؔp�g%���G5�&�M�XOw�,~bB��*�(ာ��ө�${�?u��W5߃.��@�տqDI�t�ʗ��:!i���q�g+	�?��������D���GwS}��� �q�m�5`P�jq�YV<��r|��Ф�B�
IU�GRE;gt|~ztp~�� �I��҆^�\�ۜ�:D�5�;��]
t�{��B>L�g�V�:N�KJf��$�.Ľ��OǊ�>�];L�p���MĴ�*d�c�k��F���VF��p��Q��Fx3�v��B6p��I��I��ڣ�������Wy�� �z���6r �� ��a"H�a4'=�0��h=d �� 浓���U��+Ysq���uW�4��Xj�M$s�0>R| vU�i	,�����B�l@�=zjp���q8�X q	  �9Ŧ�f��W�E�S?��Nx�#G�|���2	m9!1���R=Q�ge*���+>nKO�i��"��\##:t��R]���舲ol����?�,�f~���CZ_�ͭ�``��/{#iz��i���_�1jWt�<�㠑���-��!��gy�]c6ԛ"��9�#��3c�� ��D��q*k�(u>�G���)v���Bch8i���P'݂Y�f��C_��;��
�)��3|=���Z�I�0�1��,� ���`����x�����z���qk�@�{,��"�+wm:�i*R����]��(#8�g���f����&��Z>��{����a6��(|�֩�<dxE��������Z�I_x�ߝg�
�'=$:ݽA[	-@�cH�{�#�ϝGa#��y�*x?�?Nbϯځ<�Q�S�S�	�J���,��W��B�|���x8h8����y�Ts�Aw����09�0�q~p?^ŷ���<�vP3��͓�4	~���n�5��
5ó���8��a۫������:N�7�D�8>#�ޙ�*�|O;�$�ê,��s&NL>���?�;�6o�f������|?�F�2gzx������������|~}�$��T78aU\FDz�L����c"�ȴFx`F���=1��ۏ�[:=��JH\�C�F����Su���E����J�n�����qA���D�}M�7�6q
.f�K
��>�0r����дzp �R�������{U"��c�����Gb�e/&�daM P�4Xd9��E.��.���r���8��P)�m�>�[�-�����%T�xS4uA�R}S��d�d�6ѻVz~`��)��>�o�$|�V����S,�]���_^3wl��*ᩞ����3i.�ѧB��kx��'ɜJ��Xo(���Ѕ>~�d���ޗ�?yT�u����	��)�%��v�1�r�ѡ;�M�FO��Q/� �������!��̍�8�=?C��5%����|{���%���<�[��{l��H;]�Bm̆˅�����84S`��Ɉң�	��������,*�ځ��Ũ}+��2���6yY���O�d���O�{��{��gV7+TՅ�K��D*�;��(��<��כA �=H�?��w	��8 �X��$/�L[�A������4�<}�(T�\!-������`rmK:�-j�\s����<LΒ!�}�	�^�����oM@K��Ö��Q�l5,�)�O�g|�J�K�����ae�mͭx��T�B�'>�r�ɚ�w�Ϙv����[4h_΋�7��1�Ϳ�i&�f�����')-�w�N�v�����CSm�Vl�#�)�$�E�q�|hۖW�$��I,��F�w�i2��{��}��C���K�!�͙�;��RX������KB���
�:��(
"��d��D= ��hG�D�Y��6��y�Q�/n��Q*x�	�x.*�I0��N��lA`���Oc=�Y�Hz����B�o-��LϜ&5�T�P�,k:����O�����A�)
���}o|�I`�S�����7�a��P.1���X�p�����?�V����ә���1�NKi/�cg��2e�� KI��7�|�0�m7ۏ�6
~T�hitS��剑�a6Z�������;	}�kҭ'�q�I�������O'��0��'���{�_��x�g��B�EK,�� �"2#[F�V!N�`wĂޟ�c�5�p�f����oE��\�+��֜��6TP�{p�h���h�{�E��Ϫr7����VR�\m?�RV�d6��3)�>�a�Ez�IS/�z�\x�X��ۏ�5Yu��~Z�����vBЕw�q�W^�I�f��r�����B�(����(~�[�>BH$��
A-tC�uҗ*����yc!^��Z�iz�n��\5-�x|c�}�n��l��>Le�Ĉ�N:_4�6�g�˝�
Ii��ڇzG��Kd:�8����@M=!k?���ש[�'���I�,Z>��[��1�
�v������f��ilzHZ_��A+���d#݃6I*dxD*�E;�����u[%{�q}|�(y!{*�?Y�9Ӝ�6�#`�`}LBÎ:�ABP�Q�5�,o�c��^?���aƔ�!�$;W�~�ө `cW"�"w��q\�B%O����j��
"�~���c?�� �D�L&"���*���M�ȸM���&Ĩ�z�v�ӁwU�*���VC.�6ȱ��A8(��{���Aob�`�DZ�B�(&�!X�}�~��̻ވ5<;¿���M�cgR����^��n�g�l�w]�Y����{Yo����?�Б����{���`��jU��u|<KtԼ[  �*�|C�'cE�ή$ᵞ��!�<���G�g���?�"����G���������y��3     