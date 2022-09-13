<?php

namespace App\Form;

use App\Entity\User;
use App\Repository\UserRepository;
use Symfony\Bridge\Doctrine\Form\Type\EntityType;
use Symfony\Component\Form\AbstractType;
use Symfony\Component\Form\Extension\Core\Type\CheckboxType;
use Symfony\Component\Form\Extension\Core\Type\EmailType;
use Symfony\Component\Form\Extension\Core\Type\PasswordType;
use Symfony\Component\Form\Extension\Core\Type\TextType;
use Symfony\Component\Form\FormBuilderInterface;
use Symfony\Component\OptionsResolver\OptionsResolver;
use Symfony\Component\Validator\Constraints\Length;
use Symfony\Component\Validator\Constraints\NotBlank;

class RegistrationType extends AbstractType
{

    // public function __construct(private UserRepository $userRepo){}

    public function buildForm(FormBuilderInterface $builder, array $options): void
    {
        $builder
            ->add('email', EmailType::class)
            ->add('plainPassword', PasswordType::class, [
                // instead of being set onto the object directly,
                // this is read and encoded in the controller
                'mapped' => false,
                'attr' => [
                    'autocomplete' => 'new-password'
                ],
                'constraints' => [
                    new NotBlank([
                        'message' => 'Please enter a password',
                    ]),
                    new Length([
                        'min' => 5,
                        'minMessage' => 'Your password should be at least {{ limit }} characters',
                        // max length allowed by Symfony for security reasons
                        'max' => 4096,
                    ]),
                ],
            ])
            ->add('name', TextType::class, [

                'label' => 'Nom',
            ])
            ->add('address', TextType::class, [

                'label' => 'Adresse',
                'required' => false
            ])
            ->add('zipcode', TextType::class, [

                'label' => 'Code postal',
                'required' => false
            ])
            ->add('city', TextType::class, [

                'label' => 'Ville',
                'required' => false
            ])
            ->add('isActivated', CheckboxType::class, [
                'label_attr' => [
                    'class' => 'checkbox-inline',
                ],
                'label' => 'activé'
            ])
            ->add('slug', TextType::class, [

                'label' => 'slug'
            ])
            ->add('partner', EntityType::class, [
                'placeholder' => 'Quel est le partenaire ?',
                'class' => User::class,
                'label' => 'Partenaire',
                'choice_label' => function (User $user) {
                    return $user->getName();
                },
                'query_builder' => function (UserRepository $userRepo) {
                    $qb = $userRepo->createQueryBuilder('u');
                    return $qb
                        ->where('u.roles LIKE :role')
                        ->setParameter('role', '%"' . 'ROLE_PARTNER' . '"%')
                        ->orderBy('u.name');
                },

            ]);
    }

    public function configureOptions(OptionsResolver $resolver): void
    {
        $resolver->setDefaults([
            'data_class' => User::class,
        ]);
    }
}
