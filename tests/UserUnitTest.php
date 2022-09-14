<?php

namespace App\Tests;

use App\Entity\User;
use DateTimeImmutable;
use PHPUnit\Framework\TestCase;

class UserUnitTest extends TestCase
{
    public function testIsTrue()
    {
        $user = new User();
        $datetime = new DateTimeImmutable();

        $user
            ->setEmail('true@test.com')
            ->setPassword('password')
            ->setName('name')
            ->setAddress('address')
            ->setZipcode('75000')
            ->setCity('city')
            ->setSlug('slug')
            ->setResetToken(('reset_token'))
            ->setIsActivated(true)
            ->setIsVerified(true)
            ->setCreateAt($datetime);
        

        $this->assertTrue($user->getEmail() === 'true@test.com');
        $this->assertTrue($user->getPassword() === 'password');
        $this->assertTrue($user->getName() === 'name');
        $this->assertTrue($user->getAddress() === 'address');
        $this->assertTrue($user->getZipcode() === '75000');
        $this->assertTrue($user->getCity() === 'city');
        $this->assertTrue($user->getSlug() === 'slug');
        $this->assertTrue($user->getResetToken() === 'reset_token');
        $this->assertTrue($user->isIsActivated() === true);
        $this->assertTrue($user->isVerified() === true);
        $this->assertTrue($user->getCreateAt() === $datetime);

    }

    public function testIsFalse()
    {
        $user = new User();
        $datetime = new DateTimeImmutable();

        $user
            ->setEmail('true@test.com')
            ->setPassword('password')
            ->setName('name')
            ->setAddress('address')
            ->setZipcode('75000')
            ->setCity('city')
            ->setSlug('slug')
            ->setResetToken(('reset_token'))
            ->setIsActivated(true)
            ->setIsVerified(true)            
            ->setCreateAt($datetime);

            $this->assertFalse($user->getEmail() === 'false@test.com');
            $this->assertFalse($user->getPassword() === 'false');
            $this->assertFalse($user->getName() === 'false');
            $this->assertFalse($user->getAddress() === 'false');
            $this->assertFalse($user->getZipcode() === 'false');
            $this->assertFalse($user->getCity() === 'false');
            $this->assertFalse($user->getSlug() === 'false');
            $this->assertFalse($user->getResetToken() === 'false');
            $this->assertFalse($user->isIsActivated() === false);
            $this->assertFalse($user->isVerified() === false);
            $this->assertFalse($user->getCreateAt() === new DateTimeImmutable());
    }

    public function testIsEmpty()
    {
        $user = new User();

        $this->assertEmpty($user->getEmail());
        $this->assertEmpty($user->getName());
        $this->assertEmpty($user->getAddress());
        $this->assertEmpty($user->getZipcode());
        $this->assertEmpty($user->getCity());
        $this->assertEmpty($user->getResetToken());
        $this->assertEmpty($user->isVerified());
    }
}
